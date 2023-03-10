import React from "react";
import "@fontsource/open-sans";
import "./index.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { Sidebar } from "./components/Sidebar";
export default function App() {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="w-full">
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
        </div>
      </div>
    </>
  );
}
