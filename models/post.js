const { DataTypes } = require('sequelize');
const { sequelize } = require('../dependencies.js');

module.exports = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  replayId: {
    type: DataTypes.INTEGER,
  }
});
