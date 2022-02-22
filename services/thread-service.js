const Thread = require('../models/thread.js');
const PostService = require('./post-service.js');
const { EntityNotFoundError } = require('./errors.js');

class ThreadService {
  async create(postData) {
    const postService = new PostService();
    const post = await postService.create(postData);
    const thread = await Thread.create({
      id: post.id,
    });
    post.threadId = thread.id;
    await post.save();
    return thread;
  }

  async reply(threadId, postData) {
    const postService = new PostService();
    const thread = await Thread.findByPk(threadId);
    if(!thread) {
      throw new EntityNotFoundError(threadId);
    }
    const reply = await postService.reply(thread.id, postData);
    await thread.increment('postCount');
    if(!reply.sage) {
      thread.lastBump = reply.createdAt;
      await thread.save();
    }
  }

  async list(offset = 0, limit = 10, previewLimit = 3) {
    const postService = new PostService();
    const threads = await Thread.findAll({
      order: [[ 'lastBump', 'DESC' ]],
      offset,
      limit,
    });

    for(const t of threads) {
      t.posts = await postService.getRepliesPreview(t.id, previewLimit);
    }

    return threads;
  }

  async get(id) {
    const postService = new PostService();
    const thread = await Thread.findByPk(id);
    if(!thread) {
      throw new EntityNotFoundError(id);
    }
    thread.posts = await postService.getReplies(id);
    return thread;
  }
}

module.exports = ThreadService;
