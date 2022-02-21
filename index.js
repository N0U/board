require('dotenv').config();
const { app } = require('./dependencies.js');
const engine = require('express-engine-jsx');

app.set('views', 'views');
app.set('view engine', 'jsx');
app.engine('jsx', engine);

require('./models');
require('./controller.js');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening`)
})
