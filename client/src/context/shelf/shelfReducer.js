import { ADD_BOOK, ALL_BOOKS,REMOVE_BOOK } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [action.payload,...state.books]
              };

        case ALL_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        case REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter(book=> book._id!==action.payload),
            };

    }
};


