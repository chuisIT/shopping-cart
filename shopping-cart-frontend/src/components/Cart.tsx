import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error("Lỗi khi lấy giỏ hàng:", err));
  }, []);

  const checkout = () => {
    axios
      .delete("http://localhost:3001/api/cart")
      .then(() => {
        alert("Thanh toán thành công!");
        setCart([]);
      })
      .catch((err) => console.error("Lỗi khi thanh toán:", err));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-title">Giỏ hàng của bạn</div>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-row">
            <div className="cart-name">{item.name}</div>
            <div className="cart-quantity">{item.quantity} x</div>
            <div className="cart-price">{item.price.toLocaleString()} ₫</div>
          </div>
        </div>
      ))}

      <div className="cart-total">
        Tổng thanh toán: {total.toLocaleString()} ₫
      </div>

      <button className="checkout-button" onClick={checkout}>
        Thanh toán ngay
      </button>
    </div>
  );
};

export default Cart;
