const { DataTypes } = require('sequelize');
const { sequelize } = require('../dependencies.js');

const Post = module.exports = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING(2000),
  },
});

Post.hasMany(Post, {
  as: 'replies',
  foreignKey: 'replyToId',
});
