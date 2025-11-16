import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShopCategory.styles.scss";

// components
import ProductCard from "../../components/product-card/ProductCard";

// contexts
import { ProductContext } from "../../contexts/Products";

const ShopCategory = () => {
  const { category } = useParams();
  const { productsMap } = useContext(ProductContext);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <div className="shop-category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ShopCategory;
