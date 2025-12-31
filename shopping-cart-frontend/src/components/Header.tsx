import React from "react";
import "./Header.css";

const Header: React.FC = () => (
  <header>
    <h1>Shop Basic</h1>
    <nav>
      <a href="/">Trang chủ</a>
      <a href="/cart">Giỏ hàng</a>
    </nav>
  </header>
);

export default Header;
