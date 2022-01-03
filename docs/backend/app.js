const express = require('express');
const db = require('./models');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //Autorise l'accès à l'API pour n'importe quelle origine
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  ); //Définit les Headers utilisé par l'API
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  ); //Définit les méthodes possible à utiliser
  next();
});

app.use('/api/auth', usersRoute);
app.use('/api/post', postsRoute);
app.use('/api/comment', commentsRoute);

module.exports = app;
