const { app } = require('./dependencies.js');

app.get('/', (req, res) => {
  res.render('index', { data: 'hello world' });
})
