import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) return <p>Book not found</p>;

  return (
    <div className="container--details">
      <div className="container--detail">
        <h2>{book.title}</h2>
        <p className="author">Author: {book.author}</p>
        <img src={book.image} className="image1" />
        <p className="description">{book.description}</p>
        <p className="rating">Rating: {book.rating}</p>
        <Link to="/books/all">Back to Home</Link>
      </div>
    </div>
  );
}
