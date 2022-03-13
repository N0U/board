const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../dependencies.js');

class Post extends Model {
  isComment() {
    return !!this.replayToId;
  }
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(100),
  },
  content: {
    type: DataTypes.STRING(2000),
  },
  sage: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Post',
});

Post.hasMany(Post, {
  foreignKey: 'replayToId',
  as: 'replies',
});

module.exports = Post;
