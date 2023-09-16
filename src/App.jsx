import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/product/Products";
import { Cart } from "./pages/cart/Cart";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./context/CartContext";
import Favorite from "./pages/favorite/Favorite";
import { ProductDetail } from "./pages/product/ProductDetail";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
