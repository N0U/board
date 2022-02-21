const app = require('./server.js');
const engine = require('express-engine-jsx');

app.set('views', 'views');
app.set('view engine', 'jsx');
app.engine('jsx', engine);

require('./controller.js');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening`)
})
