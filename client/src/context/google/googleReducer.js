import { SEARCH_BOOKS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
   
      
  }
};
