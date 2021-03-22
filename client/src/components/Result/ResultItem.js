import React from 'react'

const ResultItem = (props) => {
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
                    <button  className="btn" style={{marginLeft: "6px"}}>Add  </button>
                </div>
            </div>
        </div>
    )
}

export default ResultItem
