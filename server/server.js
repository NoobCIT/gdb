const express = require('express');
const _ = require('lodash');

// Database
const mongodb = require('mongodb');
require('./db/mongoose');
const { ObjectID } = require('mongodb');
const lessMiddleware = require('less-middleware');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Models
const { User } = require('./models/user.js');

// Routers
const userRouter = require('./routers/user.js');

const publicPath = path.join(__dirname, '../public');

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     //res.send('GET requests are disables');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back soon!');
// });

app.use(lessMiddleware(__dirname + '/public/css', {
  debug: true,
  dest: __dirname,
  force: true
}));

app.use(express.static(publicPath));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(userRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
