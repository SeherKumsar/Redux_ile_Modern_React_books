import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    // BAD CODE
    // books.push({ id: 123, title: title }); // modifying a property of the state directly
    // books[0] = { id: 123, title: title }; // modifying an element of the state directly
    // books.id = 123; 
    // console.log(books);
    // setBooks(books);
    const updatedBooks = [
      ...books,
      { id: 123, title: title }
    ];
    setBooks(updatedBooks);
  };

  return <div>
    {books.length}
    <BookCreate onCreate={createBook} />
  </div>;
}

export default App;