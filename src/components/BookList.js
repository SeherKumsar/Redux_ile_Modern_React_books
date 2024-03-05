import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} /> 
      // Pass the book object as a prop to BookList constructor so that we can access it in BookShow
    );
  });

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}


export default BookList;
