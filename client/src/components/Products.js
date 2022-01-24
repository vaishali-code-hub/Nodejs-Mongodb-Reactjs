import React, { useRef } from "react";

export default function Products(props) {
  const { products, addToCart } = props;
  const inputEl = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  const productsPrice_WithSameHandle = products.find(
    (product) => product.Handle !== "" && product["Variant Price"] !== ""
  );
  const productsTitle_WithSameHandle = products.find(
    (product) => product.Handle !== "" && product.Title !== ""
  );

  return (
    <div>
      <p>
        <input
          size="50"
          ref={inputEl}
          type="text"
          placeholder="Search Product Name or SKU ..."
          className="prompt"
          value={props.term}
          onChange={getSearchTerm}
        />
        <i className="search icon"></i>
      </p>
      <pre className="displayGrid">
        {products.map((product) => (
          <div>
            <div className="card">
              <div className="product-image">
                <img
                  src={product["Image Src"]}
                  className="product-thumb small"
                  alt=""
                />
                <button class="card-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-short-des ">
                  {product.Title !== ""
                    ? product.Title
                    : productsTitle_WithSameHandle.Title}
                </h3>
                <span className="price"></span>
                <span className="actual-price">
                  $
                  {product["Variant Price"] !== ""
                    ? product["Variant Price"]
                    : productsPrice_WithSameHandle["Variant Price"]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </pre>
    </div>
  );
}
