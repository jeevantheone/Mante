import React from "react";
import { items } from "./data";
import "./App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

function Home() {
  return (
    <div>
      <div className="header">Mante Cellular</div>
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
                    <span>Get {item.offer}% Off</span> @
                    <span className="amount"> {item.price} INR</span>
                  </div>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="footer">
        <span>To avail the best price contact Ph:+91-9148114488</span><br/>
        <a href="https://g.co/kgs/kXxJP9">Address Link 📍</a><br/>
        <span>Near Bus stand, New Bridge road</span><br/>
        <span>1st floor, above Renukamba Clinic, Bhadravati-577301</span><br/>
        <span>Online payments are not being taken due to techinal issues. (It will be updated shortly..)</span>
        <br/>
      </div>
    </div>
  );
}

export default Home;
