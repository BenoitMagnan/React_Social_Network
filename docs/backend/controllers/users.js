const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('../models');
const User = db.User;

exports.signup = (req, res) => {
  const passwordValidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (passwordValidator.test(req.body.password)) {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
          userId: req.body.email.substring(0, 3) + '_' + new Date().getTime(),
        })
          .then((user) =>
            res.status(201).json({
              message: 'Utilisateur créé !',
              userId: user.userId,
              token: jwt.sign({ userId: user.userId }, process.env.MY_Token, {
                expiresIn: '1h',
              }),
            })
          )
          .catch((error) =>
            res
              .status(401)
              .json({ message: "L'adresse mail utilisée existe déjà" })
          );
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  } else {
    res.status(400).json({
      message:
        'Le mot de passe doit faire une taille de 8 caractères et doit obligatoirement contenir : 1 majuscule + 1 minuscule + 1 chiffre + 1 symbole',
    });
  }
};

exports.login = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Utilisateur non trouvé !' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            message: 'Utilisateur connecté !',
            userId: user.userId,
            token: jwt.sign({ userId: user.userId }, process.env.MY_Token, {
              expiresIn: '1h',
            }),
          });
        })
        .catch((error) => res.status(500).json({ message: error }));
    })
    .catch((error) => res.status(500).json({ message: error }));
};

exports.profil = (req, res, next) => {
  User.findAll({ where: { userId: req.param('userId') } })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ message: error.message }));
};

exports.deleteUser = (req, res) => {
  User.destroy({ where: { userId: req.param('userId') } })
    .then(() => res.status(200).json({ message: 'Utilisateur supprimé' }))
    .catch((error) => res.status(400).json({ message: error }));
  console.log('Utilisateur supprimé !');
};
