import React, { Fragment, useContext } from "react";

// components
// import ProductCard from "../../components/product-card/ProductCard";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

// context
import { ProductContext } from "../../contexts/Products";

const CategoriesPreview = () => {
  const { productsMap } = useContext(ProductContext);
  console.log(productsMap);
  return (
    <Fragment>
      {Object.keys(productsMap).map((title) => {
        const products = productsMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
      <div className="products-container"></div>;
    </Fragment>
  );
};

export default CategoriesPreview;
