import React from "react";
import "./book-list.css";

import BookListItem from "../book-list-item";

const BookListView = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
                    </li>
                );
            })}
        </ul>
    );
}

export default BookListView;