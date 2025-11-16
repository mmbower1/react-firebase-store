import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocs, getProductsAndDocs } from "../firebase";
import SHOP_DATA from "../shop-data";

export const ProductContext = createContext({
  productsMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});
  useEffect(() => {
    addCollectionAndDocs("categories", SHOP_DATA);
    const getProductsMap = async () => {
      const productMap = await getProductsAndDocs();
      // console.log(productMap);
      setProductsMap(productMap);
    };
    getProductsMap();
  }, []);
  const value = { productsMap };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
