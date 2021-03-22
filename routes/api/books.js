const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
.post(booksController.save)
.get(booksController.findAll)

router.route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove)

module.exports = router;