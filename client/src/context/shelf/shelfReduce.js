import { ADD_BOOK, ALL_BOOKS,REMOVE_BOOKS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: action.payload,
            };

        case ALL_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
        case REMOVE_BOOKS:
            return {
                ...state,
                books: action.payload,
            };



    }
};