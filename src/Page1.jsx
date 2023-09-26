import React from "react";
import { items, noLinkItems } from "./data";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="products">
        {items.map((item, index) => {
          return (
            <Link
              to={`/products?id=${index}`}
              style={{ textDecoration: "none" }}
            >
              <div key={index} className="product">
                <div className="image">
                  <img src={item.image} />{" "}
                </div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="price">
                    <span>{item.offer}%</span> @
                    <span className="amount"> {item.price} INR</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="products" style={{ paddingTop: "15px" }}>
        {noLinkItems.map((item, index) => {
          return (
            <div key={index} className="product">
              <div className="image">
                <img src={item.image} />{" "}
              </div>
              <div className="info">
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
    </div>
  );
}

export default Home;
