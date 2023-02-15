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
import { Login } from "./pages/Login";
import { Footer } from "./component/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/clothes-details/:clothCode" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}
