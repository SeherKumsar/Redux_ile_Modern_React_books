import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [ // Add a new book to the list
      ...books, // Copy the existing books
      { id: Math.round(Math.random() * 9999), // Generate a random ID
        title, // Set the title
      },
    ];
    setBooks(updatedBooks);
  };

  return <div>
    {books.length}
    <BookCreate onCreate={createBook} />
  </div>;
}

export default App;