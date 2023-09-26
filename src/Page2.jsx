import React from "react";
import "./App.css";
import { products } from "./data";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  let items = products[id];

  return (
    <div className="products">
      {items.map((item) => {
        return (
          <div className="product">
            <div className="image">
              <img src={item.image} />{" "}
            </div>
            <div className="info" style={{ textDecoration: "none" }}>
              <div className="name">{item.name}</div>
              <div className="price">
                <span>{item.offer}%</span> @
                <span className="amount"> {item.price} INR</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
