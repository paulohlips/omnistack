const express = require('express');
const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.index); // método /get busca infos
routes.post('/tweets', TweetController.store); //método /post envia infos

routes.post('/likes/:id', LikeController.store); //Incrementa like

module.exports = routes;