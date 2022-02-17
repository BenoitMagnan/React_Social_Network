const express = require('express');
const db = require('./models');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/auth', usersRoute);
app.use('/api/post', postsRoute);
app.use('/api/comment', commentsRoute);

module.exports = app;
