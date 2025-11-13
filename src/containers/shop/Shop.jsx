import React from "react";
import "./Shop.styles.scss";
// import { ProductContext } from "../../contexts/Products";
import SHOP_DATA from "../../shop-data.json";

// components
import ProductCard from "../../components/product-card/ProductCard";

const Shop = () => {
  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
