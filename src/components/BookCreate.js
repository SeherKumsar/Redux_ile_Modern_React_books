import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate () {

    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // When the form is submitted, the page should not reload
        createBook(title); // Call the createBook function from the context
        setTitle(''); // Clear the input field
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;