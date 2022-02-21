const { DataTypes } = require('sequelize');
const { sequelize } = require('../dependencies.js');

const Thread = module.exports = sequelize.define('Thread', {
  postCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  lastBump: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});
