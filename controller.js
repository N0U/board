const ThreadService = require('./services/thread-service.js');
const { EntityNotFoundError } = require('./services/errors.js');
const { app } = require('./dependencies.js');

app.route('/')
  .get(async(req, res) => {
    const threadService = new ThreadService();
    const threads = await threadService.list();
    res.render('index', { threads });
  })
  .post(async (req, res) => {
    const body = req.body;
    const threadService = new ThreadService();
    const thread = await threadService.create(body);
    res.redirect(`/${thread.id}`);
  });

app.route('/:threadId(\\d+)')
  .get(async (req, res) => {
    try {
      const { threadId } = req.params;
      const threadService = new ThreadService();
      const thread = await threadService.get(threadId);
      res.render('thread', { thread });
    } catch(error) {
      if(error instanceof EntityNotFoundError) {
        res.status(404).render('404');
      }
    }
  })
  .post(async (req, res) => {
    try {
      const { threadId } = req.params;
      const body = req.body;
      const threadService = new ThreadService();
      await threadService.reply(threadId, body);
      res.status(201).redirect(`/${threadId}`);
    } catch(error) {
      if(error instanceof EntityNotFoundError) {
        res.status(404).render('404');
      }
    }
  });

app.all('*', function(req, res){
  res.status(404).render('404');
});
