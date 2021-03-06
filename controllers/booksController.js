const db = require("../models");

module.exports = {
    save:async function (req, res) {
 
 const book=await   db.Book.find({link: req.body.link})

 if(!book.length>0){
      db.Book
     .create(req.body)
     .then(book => res.json(book))
     .catch(err => res.status(422).json(err))
 }
        


    },
    findAll: function(req, res) {
      db.Book
        .find({})
        .sort({ _id: -1 })
        .then(books => res.json(books))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.Book
        .findOne({_id: req.params.id})
        .then(book => res.json(book))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(book => book.remove())
        .then(book => res.json(book))
        .catch(err => res.status(422).json(err));
    }

  };