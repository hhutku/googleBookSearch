import React, { useContext } from 'react';
import ShelfListItem from "./ShelfListItem";
import ShelfContext from "../../context/shelf/shelfContext";

const ShelfList= ()=>  {
    const shelfContext = useContext(ShelfContext);
    const booksInShelf= shelfContext.books

    const removeBook=(id)=>{
        console.log(id)
        shelfContext.removeBookFromShelf(id)
    }


    if (!booksInShelf.length>0) {
        return ( <h1>You have no books in the bookshelf!</h1>);
    } else {
            
        return (
          
            booksInShelf.map((book) => (
            <ShelfListItem 
            key={book._id}
            id={book._id}
            title={book.title}
            link={book.link}
            authors={book.authors && book.authors.length > 1 ? book.authors.join(",") : book.authors}
            image={book.image ? book.image : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
            description={book.description}
            removeBook={removeBook}
             />
        )      
        
        )



        )
                           
    }

}
export default ShelfList


