import React, { useReducer } from 'react';
import GoogleContext from './googleContext';
import GoogleReducer from './googleReducer';
import {SEARCH_BOOKS} from '../types';
import API from "../../utils/API"


const GoogleState = props => {
  const initialState = {
    books: []
  
  };

  const [state, dispatch] = useReducer(GoogleReducer, initialState);

  const searchBooks = async searchBookName => {

    const res = await API.getGoogleBooks(searchBookName);

    dispatch({
      type: SEARCH_BOOKS,
      payload: res.data.items
    });
  };

  
  return (
    <GoogleContext.Provider
      value={{
        searchBooks,
        books :state.books

      }}
    >
      {props.children}
    </GoogleContext.Provider>
  );
};

export default GoogleState;
