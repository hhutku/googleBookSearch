import React from 'react'

const ResultItem = (props) => {
    return (

        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={props.image}  alt="book"/>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text" >{props.description}</p>                                                   
                </div>
            </div>
        </div>
    )
}

export default ResultItem
