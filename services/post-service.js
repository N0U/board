const { decorate } = require('./transaction-decorator.js');
const { Op } = require("sequelize");
const Post = require('../models/post.js');
const { EntityNotFoundError, ReplyToCommentError } = require('./errors.js');

class PostService {
  constructor() {
    decorate(this, 'create');
    decorate(this, 'reply');
  }

  async reply(title, content, sage, replyToId) {
    const originalPost = await this.getPost(replyToId);
    if(originalPost.isComment()) {
      throw new ReplyToCommentError(replyToId);
    }
    return await originalPost.createReply({ title, content, sage });
  }

  async create(title, content) {
    return await Post.create({
      title,
      content,
    });
  }

  async getPost(id) {
    const post = await Post.findByPk(id);
    if(!post) {
      throw new EntityNotFoundError(id);
    }
    return post;
  }

  async getThread(id) {
    const post = await Post.findByPk(id, {
      include: {
        model: Post,
        as: 'replies',
        order: [[ 'id', 'ASC' ]],
      },
    });
    if(!post) {
      throw new EntityNotFoundError(id);
    }
    return post;
  }

  async getThreadPreview(id, limit = 3) {
    const post = await Post.findByPk(id, {
      include: {
        model: Post,
        as: 'replies',
        order: [[ 'id', 'DESC' ]],
        limit,
      }
    });
    if(!post) {
      throw new EntityNotFoundError(id);
    }
    post.replies.reverse();
    return post;
  }
}

module.exports = PostService;
