import React, { useState, useContext,useEffect} from 'react';
import GoogleContext from "../context/google/googleContext";
import { Form } from 'react-bootstrap';
import Result from "../components/Result/Result"
import ShelfContext from "../context/shelf/shelfContext";



const Home = () => {
    const [text, setText] = useState('');
    const googleContext = useContext(GoogleContext);
    const shelfContext = useContext(ShelfContext);

    useEffect(()=>{
        shelfContext.getAllBooks()
    
        },[])

   

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
