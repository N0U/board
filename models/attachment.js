const { DataTypes } = require('sequelize');
const { sequelize } = require('../dependencies.js');

module.exports = sequelize.define('Attachment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fileId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
