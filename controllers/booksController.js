const db = require("../models");

module.exports = {
    save: function(req, res) {
      db.GoogleBooks
        .create(req.body)
        .then(book => res.json(book))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
      db.GoogleBooks
        .find({})  
        .then(books => res.json(books))
        .catch(err => res.status(422).json(err));
    }

  };