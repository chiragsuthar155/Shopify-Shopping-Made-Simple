import React from "react";
import Navbar from "./Navbar";
import bgHome from "../assets/bgHome.jpeg";
import ProductCard from "./ProductCard";

export default function Homepage() {
  return (
    <>
      {/* <div className="relative">
        <img className="w-full" src={bgHome} alt="Shopping Banner" />
        <div className="shopping-content ml-52 absolute top-20 left-1/3">
          <h1 className="text-9xl font-lg text-gray-50 w-11/12">
            Grab Upto 50% On Our Groceries Items
          </h1>
          <button className="rounded-full py-2 font-semibold hover:bg-red-700 hover:text-gray-50 transition ease-in-out delay-150  text-xl px-9 bg-gray-50 text-red-700">
            Buy Now
          </button>
        </div>
      </div> */}
      <div className="card-section ">
        <ProductCard />
      </div>
    </>
  );
}
