import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Shop Basic</h1>
          <nav>
            <Link to="/">Trang chủ</Link>
            <Link to="/cart">Giỏ hàng</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
