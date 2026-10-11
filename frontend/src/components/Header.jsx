import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {storeName}
        </Link>
      </h1>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;