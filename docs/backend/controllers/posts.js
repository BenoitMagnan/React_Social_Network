const db = require('../models');
const { post } = require('../routes/users');
const Post = db.Post;

exports.createPost = (req, res) => {
  Post.create({
    text: req.body.text,
    userId: req.body.userId,
  })
    .then((post) =>
      res.status(201).json({
        message: 'Post créé !',
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "Il semblerait qu'il y ai un problème : ' " + error + " '",
      })
    );
};

exports.deletePost = (req, res) => {
  Post.destroy({
    where: [{ id: req.param('id') }, { userId: req.param('userId') }],
  })
    .then(() => res.status(200).json({ message: 'Post supprimé' }))
    .catch((error) => res.status(400).json({ message: error.message }));
  console.log('Post supprimé !');
};

exports.getPost = (req, res, next) => {
  Post.findAll({ order: [['id', 'DESC']] })
    .then((post) => res.status(200).json({ post }))
    .catch((error) => res.status(400).json({ error }));
  console.log('Post récupérée');
};
