import React, { useReducer } from 'react';
import ShelfContext from './shelfContext';
import ShelfReducer from './shelfReducer';
import { ADD_BOOK, ALL_BOOKS,REMOVE_BOOKS } from '../types';
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
      payload: res.data.items
    });
  };

  
  return (
    <ShelfContext.Provider
      value={{
        addBook,
        books :state.books

      }}
    >
      {props.children}
    </ShelfContext.Provider>
  );
};

export default ShelfState;
