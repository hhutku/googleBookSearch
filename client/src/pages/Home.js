import React, { useState, useContext } from 'react';
import GoogleContext from "../context/google/googleContext"


const Home = () => {

    const googleContext = useContext(GoogleContext);
    const [text, setText] = useState('');
    console.log(text)
    console.log(googleContext.books)
    const onSubmit = e => {
        e.preventDefault();
        googleContext.searchBooks(text);
        setText('');

    };

    const onChange = e => setText(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input
                    type='text'
                    name='text'
                    placeholder='Search Books...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    
                />
            </form>
        </div>
    )
}

export default Home
