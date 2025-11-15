import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocs } from "../firebase";

const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
