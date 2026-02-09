import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/bookSlice";
import { useState } from "react";
import "./css/BrowseBooks.css";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const filtered = books.filter(
    (b) =>
      (category === "all" || b.category === category) &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase())),
  );
  console.log(filtered);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container--browse">
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="browse--input"
      />
      <div className="container--cards">
        {filtered.length === 0 ? (
          <div className="container--no_books"> No Books Added !</div>
        ) : (
          filtered.map((b) => (
            <div key={b.id} className="container--card_browse">
              <h3>{b.title}</h3>
              <img src={b.image} className="image" />
              <p>{b.author}</p>
              <Link to={"/book/" + b.id}>View Details</Link>
              <button
                onClick={() => handleDelete(b.id)}
                className="delete--btn"
              >
                Delete Book
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
