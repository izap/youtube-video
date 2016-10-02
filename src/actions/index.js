// action creator sekectBook which generate action object having type property.
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
