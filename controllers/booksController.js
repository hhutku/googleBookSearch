const db = require("../models");

module.exports = {
    save: function(req, res) {
      db.GoogleBooks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

  };