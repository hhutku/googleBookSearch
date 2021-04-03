const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // id: {type: String, unique: true, require: true},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, unique: true, dropDups: true},
    link: { type: String, required: true, unique: true}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;