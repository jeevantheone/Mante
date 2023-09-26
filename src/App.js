import React from "react";
import "./App.css";
import Home from "./Page1";
import ProductPage from "./Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="page">
        <div className="header">Mante Cellular</div>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
