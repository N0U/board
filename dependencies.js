const express = require('express');
const { Sequelize } = require('sequelize');
module.exports.app = express();
module.exports.sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
 },
});
