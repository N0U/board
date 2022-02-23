class EntityNotFoundError extends Error {
  constructor(id, message = '', ...params) {
    super(`Object with ${id} not found: ${message}`);
  }
}

class ReplyToCommentError extends Error {
  constructor(id, message = '', ...params) {
    super(`Cannot reply to comment ${id}: ${message}`);
  }
}


module.exports.EntityNotFoundError = EntityNotFoundError;
