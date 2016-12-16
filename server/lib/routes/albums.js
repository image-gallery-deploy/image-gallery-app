const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser').json();

const Album = require('../models/album');

router
    .get('/', (req, res, next) => {
      console.log('Album GET route...');
      const query = {};

      // support sending a nav bar query using `?`
      if(req.query.name) query.title = req.query.title;
      if(req.query._id) query._id = req.query._id;

      Album.find(query)
        .then((albums) => res.send(albums))
        .catch((err) => {
          next(err);
        });
    })
    .post('/', bodyParser, (req, res, next) => {

      new Album(req.body).save()
        .then(album => res.send(album))
        .catch((err) => {
          next(err);
        });
    })
    .get('/:id', (req, res, next) => {
      Album.findById(req.params.id)
        .then(album => res.send(album))
        .catch(next);
    })
    .put('/:id', bodyParser, (req, res, next) => {
      Album.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(saved => res.send(saved))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
      Album.findByIdAndRemove(req.params.id)
        .then(deleted => res.send(deleted))
        .catch(next);
    });

module.exports = router;