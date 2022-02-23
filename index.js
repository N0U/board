require('dotenv').config();

const express = require('express');
const { app } = require('./dependencies.js');
const engine = require('express-react-views').createEngine({ beautify: !!process.env.DEVELOP });

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })) ;

app.set('views', 'views');
app.set('view engine', 'jsx');
app.engine('jsx', engine);

require('./models');
require('./controller.js');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening`)
})

process.on('uncaughtException', function (err) {
    console.log(err);
}); 
