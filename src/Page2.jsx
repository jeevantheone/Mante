import React from "react";
import "./App.css";
import { products } from "./data";
import { useSearchParams } from "react-router-dom";

function ProductPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  let items = products[id];

  return (
    <div>
      <div className="header2">Mante Cellular</div>
      <div className="footer">
        <span>To avail the best price contact Ph:+91-9148114488</span><br/>
        <a href="https://g.co/kgs/kXxJP9">Address Link 📍</a><br/>
        <span>Near Bus stand, New Bridge road</span><br/>
        <span>1st floor, above Renukamba Clinic, Bhadravati-577301</span><br/>
      </div>
    <div className="products">
      {items.map((item) => {
        return (
          <div className="product">
            <div className="image">
              <img src={item.image} />{" "}
            </div>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="price">
              <span>Get {item.offer}% Off</span> @
                <span className="amount"> {item.price} INR</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <div className="footer">
    <span>Online payments are not being taken due to techinal issues. (It will be updated shortly..)</span>
        <br/>
    </div>
    </div>
  );
}

export default ProductPage;
