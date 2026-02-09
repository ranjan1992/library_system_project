import { Link } from "react-router-dom";
import "./css/NotFound.css";

export default function NotFound() {
  return (
    <div className="container--not">
      <div className="container--not_page">
        <h2>404 Page Not Found !</h2>

        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}
