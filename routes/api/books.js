const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
.post(booksController.save)
.get(booksController.findAll)

module.exports = router;