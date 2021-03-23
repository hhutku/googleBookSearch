import React, { useState, useContext,useEffect } from 'react';
import GoogleContext from "../context/google/googleContext";
import ShelfContext from "../context/shelf/shelfContext";
import { Form } from 'react-bootstrap';
import Result from "../components/Result/Result"



const Home = () => {

    const googleContext = useContext(GoogleContext);
    const shelfContext = useContext(ShelfContext);

    const [text, setText] = useState('');

    console.log(text)
    console.log(googleContext.books)
    
    const onSubmit = e => {
        e.preventDefault();
        googleContext.searchBooks(text);
        setText('');

    };

    useEffect(()=>{
    shelfContext.getAllBooks()

    },[])




    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} >
                <Form.Group>
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
                </Form.Group>
            </form>
            <Result />
        </div>
    )
}

export default Home
