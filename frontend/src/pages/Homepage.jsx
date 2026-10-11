import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div>
      <Hero
        title="Upgrade Your Tech"
        subtitle="Discover smart gadgets for your everyday life."
        buttonText="Shop Now"
      />

      <main className="products-section">
        <h2>Why Shop With Us?</h2>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-info">
              <h2>Quality Products</h2>
              <p className="description">
                We offer useful technology products for everyday life.
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <h2>Easy Shopping</h2>
              <p className="description">
                Browse our products and add your favorites to the cart.
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <h2>Simple Experience</h2>
              <p className="description">
                Find your products quickly with our simple online store.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/products">
            <button>View Products</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;