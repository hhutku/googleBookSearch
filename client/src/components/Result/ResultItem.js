
import React, { useContext, useState } from 'react';
import ShelfContext from "../../context/shelf/shelfContext";

const ResultItem = (props) => {

    const shelfContext = useContext(ShelfContext);
    const [buttonState, setButtonState] = useState(false)

    function addToShelf() {
        shelfContext.addBook(props)
        console.log(shelfContext.books)
        setButtonState(true)
    }


    return (

        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={props.image} style={{ maxWidth: "100px" }} alt="book" />
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text" >{props.description}</p>
                    <p style={{ fontStyle: "italic" }}>Author(s): {props.authors}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" >View Book</a>
                    <button onClick={() => { addToShelf() }} className={buttonState ? "btn btn-success" : "btn btn-info"} style={{ marginLeft: "6px" }}>{buttonState ? "Added" : "Add"}</button>
                </div>
            </div>
        </div>
    )
}

export default ResultItem
