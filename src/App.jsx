import React from "react";
import "@fontsource/open-sans";
import "./index.css";
import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/clothes-details/:clothCode" element={<Product />} />
        </Routes>
      </Provider>
    </>
  );
}
