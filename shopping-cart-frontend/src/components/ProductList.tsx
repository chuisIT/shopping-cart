import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product: Product) => {
    axios
      .post("http://localhost:3001/api/cart", {
        product,
        quantity: 1,
      })
      .then(() => alert("Đã thêm vào giỏ hàng!"));
  };

  return (
    <main>
      <h2>Cửa Hàng Công Nghệ</h2>
      <p>Khám phá những sản phẩm mới nhất với giá ưu đãi.</p>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={`/images/${p.id}.jpg`} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price.toLocaleString()}₫</p>
            <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
