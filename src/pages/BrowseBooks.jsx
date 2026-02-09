import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./css/BrowseBooks.css";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);

  const [search, setSearch] = useState("");

  const filtered = books.filter(
    (b) =>
      (category === "all" || b.category === category) &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div className="container--browse">
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="browse--input"
      />
      <div className="container--cards">
        {filtered.map((b) => (
          <div key={b.id} className="container--card_browse">
            <h3>{b.title}</h3>
            <img src={b.image} alt="" className="image" />
            <p>{b.author}</p>
            <Link to={"/book/" + b.id}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
