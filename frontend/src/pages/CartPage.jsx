import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="products-section">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>Your cart is empty.</p>

          <Link to="/products">
            <button>Shop Products</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="product-grid">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Total: ${total.toFixed(2)}</h2>

            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

export default CartPage;