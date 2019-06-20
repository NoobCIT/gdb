const express = require('express');
const lessMiddleware = require('less-middleware');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(lessMiddleware(__dirname + '/public/css', {
  debug: true,
  dest: __dirname,
  force: true
}));
app.use(express.static(publicPath));

app.get('/', function(req, res) {
  res.render('index.html')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
