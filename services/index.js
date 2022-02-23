const { decorate } = require('./transaction-decorator.js');
const Attachment = require('../models/attachment.js');
const AttachmentService = require('./attachment-service.js');
const Thread = require('../models/thread.js');
const ThreadService = require('./thread-service.js');
const Post = require('../models/post.js');
const PostService = require('./post-service.js');
const { EntityNotFoundError, ReplyToCommentError } = require('./errors.js');

class BoardService {
  constructor() {
    decorate(this, 'createThread');
    decorate(this, 'replyThread');
  }

  async getBoard(offset = 0, limit = 10, previewLimit = 3) {
    const threads = await Thread.findAll({
      order: [[ 'lastBump', 'DESC' ]],
      offset,
      limit,
      include: {
        model: Post,
        as: 'headPost',
        include: [
          {
            model: Post,
            as: 'replies',
            order: [[ 'id', 'DESC' ]],
            limit: previewLimit,
            include: { all: true },
          },
          {
            model: Attachment,
          }
        ],
      }
    });
    for(const t of threads) {
      t.headPost.replies.reverse();
    }
    return threads;
  }

  async createThread(title, content, attachments) {
    const attachmentService = new AttachmentService();
    const threadService = new ThreadService();
    const postService = new PostService();

    const post = await postService.create(title, content);
    const thread = await threadService.create(post.id);
    if(attachments)
      await attachmentService.create(post, attachments);
    thread.headPost = post;
    return thread;
  }

  async replyThread(id, title, content, sage, attachments) {
    const attachmentService = new AttachmentService();
    const threadService = new ThreadService();
    const postService = new PostService();

    const post = await postService.reply(title, content, id);
    const thread = await threadService.update(id, sage);
    if(attachments)
      await attachmentService.create(post, attachments);
    return {
      thread,
      post,
    };
  }

  async getThread(id) {
    const thread = await Thread.findByPk(id, {
      include: {
        model: Post,
        as: 'headPost',
        include: [
          {
            model: Post,
            as: 'replies',
            order: [[ 'id', 'ASC' ]],
            include: { all: true },
          },
          {
            model: Attachment,
          },
        ],
      },
    });
    if(!thread) {
      throw new EntityNotFoundError(id);
    }
    return thread;
  }
}

module.exports = BoardService;
