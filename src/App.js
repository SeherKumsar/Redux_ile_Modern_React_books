import { useState } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }; // Update the title of the book with the given ID
      }
      return book; // Keep the book as it is
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id; // Keep all the books that don't have the ID we want to delete (silinen id'yi hariç tut ve diğerlerini döndür)
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    
    console.log(response);

    // const updatedBooks = [ // Add a new book to the list
    //   ...books, // Copy the existing books
    //   { id: Math.round(Math.random() * 9999), // Generate a random ID
    //     title, // Set the title
    //   },
    // ];
    // setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;