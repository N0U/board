const { Op } = require("sequelize");
const Post = require('../models/post.js');

class PostService {
  async reply(threadId, postData) {
    return await Post.create({
      title: postData.title,
      content: postData.content,
      threadId,
    });
  }

  async create(postData) {
    return await Post.create({
      title: postData.title,
      content: postData.content,
    });
  }

  async getRepliesPreview(threadId, limit = 3) {
    const headPost = await Post.findByPk(threadId);
    const posts = await Post.findAll({
      where: {
        threadId,
        [Op.not]: [
          { id: threadId, }
        ],
      },
      order: [[ 'id', 'DESC' ]],
      limit,
    });
    return [headPost, ...posts.reverse()];
  }

  async getReplies(threadId) {
    return await Post.findAll({
      where: {
        threadId,
      },
      order: [[ 'id', 'ASC' ]],
    });
  }
}

module.exports = PostService;
