const Post = module.exports.post = require('./post.js');
const Thread = module.exports.thread = require('./thread.js');
const Attachment = module.exports.attachment = require('./attachment.js');

Thread.belongsTo(Post, {
  foreignKey: 'id',
  as: 'headPost',
});

Post.hasMany(Attachment, {
  foreignKey: {
    name: 'postId',
    allowNull: false,
  },
});

//Promise.all([ Post.sync({ alter: true }), Thread.sync({ alter: true }), Attachment.sync({ alter: true }) ]);
