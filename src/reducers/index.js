import { combineReducers } from 'redux';
import BooksReducers from './reducer_books';

const rootReducers = combineReducers({
  books: BooksReducers
});

export default rootReducers;
