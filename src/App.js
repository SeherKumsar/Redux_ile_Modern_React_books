import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    // BAD CODE
    books.push({ id: 123, title: title });
    console.log(books);
    setBooks(books); // 
  };

  return <div>
    {books.length}
    <BookCreate onCreate={createBook} />
  </div>;
}

export default App;