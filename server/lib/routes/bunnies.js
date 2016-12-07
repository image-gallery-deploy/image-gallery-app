const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser').json();

const Bunny = require('../models/bunny');

router
    .get('/', (req, res, next) => {
      console.log('Bunny GET route...');
      const query = {};

      // support sending a nav bar query using `?`
      if(req.query.name) query.title = req.query.title;
      if(req.query._id) query._id = req.query._id;

      Bunny.find(query)
        .then(bunnies => res.send(bunnies))
        .catch((err) => {
          next(err);
        });
    })
    .post('/', bodyParser, (req, res, next) => {

      new Bunny(req.body).save()
        .then(bunny => res.send(bunny))
        .catch((err) => {
          next(err);
        });
    })
    .get('/:id', (req, res, next) => {
      Bunny.findById(req.params.id)
        .then(bunny => res.send(bunny))
        .catch(next);
    })
    .put('/:id', bodyParser, (req, res, next) => {
      Bunny.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(saved => res.send(saved))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
      Bunny.findByIdAndRemove(req.params.id)
        .then(deleted => res.send(deleted))
        .catch(next);
    });

module.exports = router;