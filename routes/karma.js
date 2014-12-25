var Karma = require('../models/karma');
var express = require('express');
var router = express.Router();

router.route('/karma')
  .get(function (req, res) {
    Karma.find(function (err, sessions) {
      if (err) {
        return res.send(err);
      }

      res.json(sessions);
    });
  })
  .post(function (req, res) {
    var karma = new Karma(req.body);
    karma.save(function (err) {
      if (err) {
        return res.send(err);
      }

      res.send({message: 'Karma inserted'});
    });
  });

router.route('/karma/:id')
  .get(function (req, res) {
    Karma.findOne({_id: req.params.id}, function (err, data) {
      if (err) {
        return res.send(err);
      }

      res.json(data);
    })
  })
  .put(function (req, res) {
    Karma.findOne({_id: req.params.id}, function (err, data) {
      if (err) {
        return res.send(err);
      }

      for (prop in req.body) {
        data[prop] = req.body[prop];
      }

      data.save(function (err) {
        if (err) {
          return res.send(err);
        }

        res.json({message: 'Karma updated!'});
      })
    });
  })
  .delete(function (req, res) {
    Karma.remove({_id: req.params.id}, function (err, data) {
      if (err) {
        return res.send(err);
      }

      res.json({message: 'User deleted!'});
    })
  });

module.exports = router;
