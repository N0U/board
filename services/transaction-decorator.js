const { sequelize, clsNamespace } = require('./../dependencies.js');

const checkTransaction = module.exports.checkTransaction = async function(fn) {
  if(!clsNamespace.get('transaction')) {
    return await sequelize.transaction(fn);
  } else {
    return await fn(clsNamespace.get('transaction'));
  }
}

const decorator = module.exports.decorator = function(fn) {
  return function(...params){
    try {
      return checkTransaction(() => fn.call(this, ...params));
    }
    catch (e) {
      throw e;
    }
  };
}

const decorate = module.exports.decorate = function(obj, name) {
  obj[name] = decorator(obj[name]);
}
