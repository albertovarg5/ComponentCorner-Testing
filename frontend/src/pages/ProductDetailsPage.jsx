import { Link, useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="products-section">
        <h2>Product Not Found</h2>

        <Link to="/products">
          <button>Back to Products</button>
        </Link>
      </main>
    );
  }

  return (
    <main className="products-section">
      <div className="product-card">
        <img src={product.image} alt={product.name} />

        <div className="product-info">
          <h2>{product.name}</h2>

          <p className="description">
            {product.description}
          </p>

          <p className="price">
            ${product.price.toFixed(2)}
          </p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <Link to="/products">
            <button>Back to Products</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;