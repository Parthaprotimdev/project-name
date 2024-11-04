import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  // filter all products
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    fetch("gadgetData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ allProducts,setAllProducts,filteredProducts, setFilteredProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
