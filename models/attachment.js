const { DataTypes } = require('sequelize');
const { sequelize } = require('../dependencies.js');

module.exports = sequelize.define('Attachment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: DataTypes.ENUM,
    values: ['image', 'youtube', 'tiktok'],
    defaultValue: 'image',
  },
  fileId: {
    type: DataTypes.STRING,
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
  },
  fullUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
