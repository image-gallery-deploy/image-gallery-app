const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser').json();

const Image = require('../models/image');
const Album = require('../models/album');

router
    .get('/', (req, res, next) => {
      console.log('Image GET route...');
      const query = {};

      // support sending a nav bar query using `?`
      if(req.query.album) query.album = req.query.album;
      if(req.query._id) query._id = req.query._id;

      Image.find(query)
        .then((images) => res.send(images))
        .catch(err => next(err));
        
    })
    .post('/', bodyParser, (req, res, next) => {

      Album.find({title: req.body.album})
        .select('_id')
        .then(id => {
          req.body.albumId = id[0]._id;
          console.log('req.body: ', req.body);

          new Image(req.body).save()
            .then(image => res.send(image))
            .catch((err) => {
              next(err);
            });
        })
        .catch(next);

    })
    .get('/:album', (req, res, next) => {
      console.log('images.js req imgs by alb: ', req.params);
      Image.find(req.params)
        .then(images => {
          res.send(images);
        })
        .catch(next);

    })
    .get('/:id', (req, res, next) => {
      Image.findById(req.params.id)
        .then(image => res.send(image))
        .catch(next);

    })
    .put('/:id', bodyParser, (req, res, next) => {
      Image.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(saved => res.send(saved))
        .catch(next);

    })
    .delete('/:id', (req, res, next) => {
      Image.findByIdAndRemove(req.params.id)
        .then(deleted => res.send(deleted))
        .catch(next);

    });

module.exports = router;