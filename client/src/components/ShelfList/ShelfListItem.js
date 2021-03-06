import React from 'react';

function ShelfListItem(props) {
    const {title, authors, image, link, description,removeBook,id} = props



    return (
        
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} style={{maxWidth: "100px"}} alt="image"/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p style={{fontStyle: "italic"}}>Author(s): {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginRight: "6px", backgroundColor: "rgb(33, 150, 243)", color: "white"}}>View Book</a>
                    <button onClick={()=>removeBook(id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ShelfListItem;