import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to={"/"}>
        <h3>Logo</h3>
      </Link>
      <ul className="nav-link">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/project">
          <li>Project</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
