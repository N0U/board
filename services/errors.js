class EntityNotFoundError extends Error {
  constructor(id, message = '', ...params) {
    super(`Object with ${id} not found: ${message}`);
  }
}

module.exports.EntityNotFoundError = EntityNotFoundError;
