import { Link } from "react-router-dom";
import "./css/Home.css";
export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Online Library</h1>
      <div className="categories">
        <Link to="/books/fiction">Fiction</Link>
        <Link to="/books/non-fiction">Non-Fiction</Link>
        <Link to="/books/sci-fi">Sci-Fi</Link>
      </div>
    </div>
  );
}
