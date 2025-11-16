import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Shop.styles.scss";

// containers
import CategoriesPreview from "../categories-preview/CategoriesPreview";

// components
// import ProductCard from "../../components/product-card/ProductCard";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import ShopCategory from "../../containers/shop-category/ShopCategory";

// context
// import { ProductContext } from "../../contexts/Products";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<ShopCategory />} />
    </Routes>
  );
};

export default Shop;

// FOR JSON DATABASE
// import SHOP_DATA from "../../shop-data.json";

// const Shop = () => {
//   return (
//     <div className="products-container">
//       {SHOP_DATA.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default Shop;
