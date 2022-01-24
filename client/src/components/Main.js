import React from "react";
import Products from "./Products";
import Header from "./Header";
import Basket from "./Basket";
import { useState } from "react";

function Main(props) {
  const [cart, setCart] = useState([]);
  //const [products, setProducts] = useState([])
  const { products, searchTerm, searchKeyword } = props;

  const addToCart = (item) => {
    const exist = cart.find((product) => product.Title === item.Title);
    if (exist) {
      setCart(
        cart.map((product) =>
          product.Title === item.Title
            ? { ...exist, qty: exist.qty + 1 }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const exist = cart.find((product) => product.Title === item.Title);
    if (exist.qty === 1) {
      setCart(cart.filter((product) => product.Title !== item.Title));
    } else {
      setCart(
        cart.map((product) =>
          product.Title === item.Title
            ? { ...exist, qty: exist.qty - 1 }
            : product
        )
      );
    }
  };

  return (
    <div className="App">
      <Header cart={cart} />
      <div className="row block">
        <Products
          addToCart={addToCart}
          cart={cart}
          setCart={setCart}
          products={products}
          term={searchTerm}
          searchKeyword={searchKeyword}
        />
        <Basket
          cart={cart}
          products={products}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default Main;
