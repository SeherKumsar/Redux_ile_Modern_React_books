import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => { // Fetch the books when the component mounts
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    // await axios.put('http://localhost:3001/books/' + id'
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(response.data); // Log the updated book to the console

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
    
    const updatedBooks = [ // Add a new book to the list
      ...books, // Copy the existing books
      response.data, // Add the new book
    ];
    setBooks(updatedBooks);
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