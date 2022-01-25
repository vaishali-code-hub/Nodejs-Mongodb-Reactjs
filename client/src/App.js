import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Main from "./components/Main";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveProducts from API /allProducts
  const retrieveData = async () => {
    try {
      const response = await fetch(`/allProducts`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("error in retreiving data from API");
    }
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductList = products.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      setSearchResults(newProductList);
    } else {
      setSearchResults(products);
    }
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllCOntacts = async () => {
      const allProducts = await retrieveData();
      if (allProducts) setProducts(allProducts["Products"]);
    };

    getAllCOntacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            products={searchTerm.length < 1 ? products : searchResults}
            term={searchTerm}
            searchKeyword={searchHandler}
          />
        }
      />
      <Route path="basket" element={<Basket />} />
    </Routes>
  );
}

export default App;
