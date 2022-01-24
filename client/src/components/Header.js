import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { cart } = props;
  const countCartItems = cart.length;

  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1> Modern Store</h1>
        </a>
      </div>
      <div>
        <Link to="#/">
          {" "}
          Cart{" "}
          {countCartItems ? (
            <button className="itemCount">{countCartItems} </button>
          ) : (
            " "
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
