import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image:
      "https://placehold.co/600x400/2563eb/ffffff?text=Headphones",
    description:
      "Enjoy high-quality sound with wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image:
      "https://placehold.co/600x400/7c3aed/ffffff?text=Smart+Watch",
    description:
      "Track your daily activities with a smart watch.",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: 39.99,
    image:
      "https://placehold.co/600x400/059669/ffffff?text=Speaker",
    description:
      "Take your music anywhere with a portable speaker.",
  },
];

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("componentCornerCart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("componentCornerCart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  return (
    <BrowserRouter>
      <Header
        storeName="ComponentCorner Tech"
        cartCount={cart.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetailsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>

      <Footer
        storeName="ComponentCorner Tech"
        email="support@componentcorner.com"
        description="Your favorite store for modern technology."
      />
    </BrowserRouter>
  );
}

export default App;