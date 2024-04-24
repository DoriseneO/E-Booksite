import React from "react";
import booklist from "./BookData";
import { Link } from "react-router-dom";

const BookCom = () => {
  console.log(booklist);
  return (
    <div>
      {booklist.map((book, id) => (
        <p key={id}>
          <Link to="/product">{booklist.price}</Link>
          {book.price}
        </p>
      ))}
    </div>
  );
};
export default BookCom;
