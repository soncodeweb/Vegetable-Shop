import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

function ProductProvider(props) {
  const [idProduct, setIdProduct] = useState(1);
  const [showProductDetail, setShowProductDetail] = useState(false);
  function handleClose() {
    setShowProductDetail(false);
  }
  const value = [idProduct, setIdProduct, showProductDetail, handleClose, setShowProductDetail];
  return <ProductContext.Provider value={value} {...props}></ProductContext.Provider>;
}

function useProduct() {
  const context = useContext(ProductContext);
  if (typeof context === "undefined") throw new Error("useProduct must be used within a ProductProvider");
  return context;
}

export { useProduct, ProductProvider };
