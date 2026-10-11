import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="description">{product.description}</p>

        <p className="price">${product.price.toFixed(2)}</p>

        <div>
          <Link to={`/products/${product.id}`}>
            <button>View Details</button>
          </Link>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;