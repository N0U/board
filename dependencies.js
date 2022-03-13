const express = require('express');
const { Sequelize } = require('sequelize');
const cls = require('cls-hooked');
const sequelizeNamespace = cls.createNamespace('sequelize-namespace');
Sequelize.useCLS(sequelizeNamespace);

module.exports.app = express();
module.exports.sequelize = new Sequelize(process.env.DATABASE_URL, {
  schema: process.env.DEVELOP ? 'test' : 'public',
  logging: false,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
 },
});
module.exports.clsNamespace = sequelizeNamespace;
