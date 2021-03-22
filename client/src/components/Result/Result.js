import React,{ useContext}  from 'react'
import GoogleContext from "../../context/google/googleContext";
import ResultItem from "./ResultItem.js"

const Result = () => {
    const googleContext = useContext(GoogleContext);


    return (
        googleContext.books.map((book) => (
            <ResultItem 
            key={book.id}
            title={book.volumeInfo.title}                
            image={book.volumeInfo.imageLinks.thumbnail }
            description={book.volumeInfo.description}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(",") : book.volumeInfo.authors}
             />
        )
    )
    )
}

export default Result
