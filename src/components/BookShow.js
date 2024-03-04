import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow ({ book , onDelete, onEdit}) {

    const [showEdit, setShowEdit] = useState(false); // Default value is false (we don't want to show the edit form)

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit); // Toggle the value of showEdit
    };

    const handleSubmit = () => {
        setShowEdit(false); // Hide the edit form
    };

    let content = <h3>{book.title}</h3>;

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book}/>;
    }

    return <div className="book-show">

        <div>{content}</div>

        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    </div>;
}

export default BookShow;