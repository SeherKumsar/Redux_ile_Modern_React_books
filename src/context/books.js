import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    // await axios.put('http://localhost:3001/books/' + id'
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(response.data); // Log the updated book to the console

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data}; // get the whole book object and update the title
      }
      return book; // Keep the book as it is
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
  await axios.delete(`http://localhost:3001/books/${id}`); // Delete the book from the server

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

  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;

// import { Provider } from '/./a.sdf'; // only provider
// import BooksContext  from '/./a.sdf'; // only context
