const { DataTypes } = require('sequelize');
const { sequelize } = require('../dependencies.js');

module.exports = sequelize.define('Thread', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
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
