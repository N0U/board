const PostService = require('./services/post-service.js');
const ThreadService = require('./services/thread-service.js');
const { app } = require('./dependencies.js');

app.get('/', async(req, res) => {
  const threadService = new ThreadService();
  const postService = new PostService();

  const threads = await threadService.list();
  for(const t of threads) {
    t.posts = await postService.getRepliesPreview(t.id);
  }
  res.render('index', { threads });
})

app.post('/', async (req, res) => {
  const body = req.body;
  postService = new PostService();
  const post = await postService.create(body.title, body.content);
  res.redirect('/');
});
