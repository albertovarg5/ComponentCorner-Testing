function CartItem({ item, removeFromCart }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />

      <div className="product-info">
        <h2>{item.name}</h2>

        <p className="description">
          Quantity: {item.quantity}
        </p>

        <p className="price">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;