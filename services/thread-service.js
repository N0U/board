const { decorate } = require('./transaction-decorator.js');
const Thread = require('../models/thread.js');
const { EntityNotFoundError } = require('./errors.js');

class ThreadService {
  constructor() {
    decorate(this, 'create');
    decorate(this, 'update');
  }

  async create(postId) {
    return await Thread.create({
      id: postId,
    });
  }

  async listThreads(offset = 0, limit = 10) {
    return await Thread.findAll({
      order: [[ 'lastBump', 'DESC' ]],
      offset,
      limit,
    });
  }

  async getThread(id) {
    const thread = await Thread.findByPk(id);
    if(!thread) {
      throw new EntityNotFoundError(id);
    }
    return thread;
  }

  async update(id, bump = true) {
    const thread = await this.getThread(id);
    thread.lastBump = new Date();
    if(bump) {
      await thread.increment('postCount');
    } else {
      await thread.save();
    }
    return thread;
  }
}

module.exports = ThreadService;
