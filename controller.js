const BoardService = require('./services');
const { EntityNotFoundError, ReplyToCommentError } = require('./services/errors.js');
const { app } = require('./dependencies.js');

app.route('/')
  .get(async(req, res) => {
    const boardService = new BoardService();
    const threads = await boardService.getBoard();
    res.render('index', { threads });
  })
  .post(async (req, res) => {
    const body = req.body;
    console.log(body);
    const { title, content, attachments } = body;
    const boardService = new BoardService();
    const thread = await boardService.createThread(title, content, attachments);
    res.redirect(`/`);
  });

app.route('/:threadId(\\d+)')
  .get(async (req, res) => {
    try {
      const { threadId } = req.params;
      const boardService = new BoardService();
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
  .post(async (req, res) => {
    try {
      const { threadId } = req.params;
      const body = req.body;
      console.log(body);
      const { title, content, sage, attachments } = body;
      const boardService = new BoardService();
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
  });

app.all('*', function(req, res){
  res.status(404).render('404');
});
