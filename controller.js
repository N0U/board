const { body, oneOf, validationResult } = require('express-validator');
const BoardService = require('./services');
const { EntityNotFoundError, ReplyToCommentError } = require('./services/errors.js');
const { app } = require('./dependencies.js');

const PAGE_SIZE = 10;

const boardService = new BoardService();

app.route('/')
  .get(async(req, res) => {
    const { page = 0 } = req.query;
    const { count, threads } = await boardService.getBoard(page*PAGE_SIZE, PAGE_SIZE);
    res.render('index', { page, pageCount: Math.ceil(count/PAGE_SIZE), threads });
  })
  .post(
    body('title').trim(),
    body('content').trim(),
    body('attachments').trim().isURL(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render(
          'error',
          { errors: errors.errors.map(e => e.param) },
        );
      }

      const body = req.body;
      const { title, content, attachments } = body;
      const thread = await boardService.createThread(title, content, attachments);
      return res.redirect(`/`);
    }
  );

app.route('/:threadId(\\d+)')
  .get(async (req, res) => {
    try {
      const { threadId } = req.params;
      const thread = await boardService.getThread(threadId);
      res.render('thread', { thread });
    } catch(error) {
      if(error instanceof EntityNotFoundError) {
        res.status(404).render('404');
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
          return res.status(400).render(
            'error',
            { errors: errors.errors.map(e => e.param) },
          );
        }

        const { threadId } = req.params;
        const body = req.body;
        const { title, content, sage, attachments } = body;
        await boardService.replyThread(threadId, title, content, sage, attachments);
        res.status(201).redirect(`/${threadId}`);
      } catch(error) {
        if(error instanceof EntityNotFoundError) {
          res.status(404).render('404');
        } else {
          console.error(error);
          throw error;
        }
      }
    }
  );

app.all('*', function(req, res){
  res.status(404).render('404');
});
