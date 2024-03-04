import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id; // Keep all the books that don't have the ID we want to delete (silinen id'yi hariç tut ve diğerlerini döndür)
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [ // Add a new book to the list
      ...books, // Copy the existing books
      { id: Math.round(Math.random() * 9999), // Generate a random ID
        title, // Set the title
      },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;