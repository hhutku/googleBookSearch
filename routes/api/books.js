const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.save);

module.exports = router;