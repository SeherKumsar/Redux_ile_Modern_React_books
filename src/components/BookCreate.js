import { useState } from 'react';

function BookCreate ({ onCreate }) {

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // When the form is submitted, the page should not reload
        onCreate(title);
        setTitle(''); // Clear the input field
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange}/>
            <button>Create!</button>
        </form>
    </div>;
}

export default BookCreate;