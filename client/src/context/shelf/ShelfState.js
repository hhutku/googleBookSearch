import React, { useReducer } from 'react';
import ShelfContext from './shelfContext';
import ShelfReducer from './shelfReducer';
import { ADD_BOOK, ALL_BOOKS, REMOVE_BOOK } from '../types';
import API from "../../utils/API"


const ShelfState = props => {
  const initialState = {
    books: []

  };

  const [state, dispatch] = useReducer(ShelfReducer, initialState);

  const addBook = async newBook => {
    const res = await API.addBook(newBook);
    dispatch({
      type: ADD_BOOK,
      payload: res.data
    });
  };

  const getAllBooks = async () => {
    const res = await API.getAllBooks();
    dispatch({
      type: ALL_BOOKS,
      payload: res.data
    });
  };

  const removeBookFromShelf = async (id) => {
     await API.removeBook(id);
    dispatch({
      type: REMOVE_BOOK,
      payload: id
    });
  };

  return (
    <ShelfContext.Provider
      value={{
        addBook,
        getAllBooks,
        removeBookFromShelf,
        books: state.books

      }}
    >
      {props.children}
    </ShelfContext.Provider>
  );
};

export default ShelfState;
