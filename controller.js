const { body, oneOf, validationResult } = require('express-validator');
const BoardService = require('./services');
const { EntityNotFoundError, ReplyToCommentError } = require('./services/errors.js');
const { app } = require('./dependencies.js');

const PAGE_SIZE = 10;

const boardService = new BoardService();

app.route('/api/board')
  .get(async(req, res) => {
    const { page = 0 } = req.query;
    const { count, threads } = await boardService.getBoard(page*PAGE_SIZE, PAGE_SIZE);
    return res.status(200).json({ page, pageCount: Math.ceil(count/PAGE_SIZE), threads });
  })
  .post(
    body('title').trim(),
    body('content').trim(),
    body('attachments').trim().isURL(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.errors });
      }

      const body = req.body;
      const { title, content, attachments } = body;
      const thread = await boardService.createThread(title, content, attachments);
      return res.status(201).json(thread);
    }
  );

app.route('/api/board/:threadId(\\d+)')
  .get(async (req, res) => {
    try {
      const { threadId } = req.params;
      const thread = await boardService.getThread(threadId);
      return res.status(200).json(thread);
    } catch(error) {
      if(error instanceof EntityNotFoundError) {
        return res.status(404).json({ error: 'not found' });
      } else {
        console.error(error);
        throw error;
      }
    }
  })
  .post(
    body('title').trim(),
    oneOf([
      body('content').trim().notEmpty(),
      body('attachments').trim().isURL(),
    ]),
    async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.errors });
        }

        const { threadId } = req.params;
        const body = req.body;
        const { title, content, sage, attachments } = body;
        const result = await boardService.replyThread(threadId, title, content, sage, attachments);
        return res.status(201).json(result);
      } catch(error) {
        if(error instanceof EntityNotFoundError) {
          return res.status(404).json({ error: 'not found' });
        } else {
          console.error(error);
          throw error;
        }
      }
    }
  );

app.all('*', function(req, res){
  return res.status(404).json({ error: 'not found' });
});
