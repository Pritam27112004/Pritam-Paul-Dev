import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-name">
          Pritam Paul
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;