import React, { useState, useEffect } from "react";
import productsData from "../../Brands.json";
import "./Style.css";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleSort = (event) => {
    const value = event.target.value;
    let sortedProducts;

    if (value === "asc") {
      sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (value === "desc") {
      sortedProducts = [...products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    setProducts(sortedProducts);
  };
  return (
    <div>
      <Header />
      <div className="shop-head">
        <h2>SHOP & BRANDS</h2>
        <p>Explore exquisite collections of the most luxurious brands</p>
      </div>

      <div>
        <select onChange={handleSort}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        {products.map((product) => (
          <div key={product.id} className="brand">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
