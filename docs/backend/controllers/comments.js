const db = require('../models');
const Comment = db.Comment;

exports.createComment = (req, res) => {
  Comment.create({
    text: req.body.text,
    userId: req.body.userId,
    PostId: req.body.PostId,
  })
    .then((comment) =>
      res.status(200).json({
        message: 'Commentaire créé !',
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "Il semblerait qu'il y ai un problème : ' " + error + " '",
      })
    );
};

exports.getComment = (req, res, next) => {
  Comment.findAll({ order: [['id', 'DESC']] })
    .then((comment) => res.status(200).json({ comment }))
    .catch((error) => res.status(400).json({ error }));
  console.log('Commentaire récupéré');
};

exports.deleteComment = (req, res) => {
  Comment.destroy({
    where: [{ id: req.param('id') }, { userId: req.param('userId') }],
  })
    .then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
    .catch((error) => res.status(400).json({ message: error.message }));
  console.log('Commentaire supprimé !');
};
