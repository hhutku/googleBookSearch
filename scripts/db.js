const mongoose = require("mongoose");
const GoogleBooks = require("../controllers/booksController");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);



const books = {
  title: "title12",
  authors: "hemigway12",
  description: "descriptionsss12",
  image: "image link12",
  link: "linkkk12"

}

const saveBook = async ()=> {
 const book=await db.GoogleBooks.create(books);
 console.log(book) 
 
}
// saveBook();

const findAll = async()=>{
 const books=await db.GoogleBooks.find({})
 console.log(books)
   
}
findAll();

