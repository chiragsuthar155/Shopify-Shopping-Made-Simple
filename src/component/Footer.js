import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-evenly items-center mt-20 bg-gray-800 text-gray-50 py-20">
        <div className="flex flex-row items-center">
          <img className="w-48 mr-8 rounded-full" src={logo} alt="Logo" />
          <h1 className="font-bold  text-5xl text-[#ffc904]">Shopify</h1>
        </div>
        <div className="flex flex-row items-center gap-20">
          <ul className="">
            <h1 className="text-xl mb-8">Get To Know Us</h1>
            <Link to="/about">
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer text-gray-400 text-lg  hover:text-gray-50">
                Contact Us
              </li>
            </Link>
            <Link to="/privacy-policy">
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Privacy Policy
              </li>
            </Link>
            <Link to="/terms-conditions">
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Terms and Conditions
              </li>
            </Link>
          </ul>
          <ul className="">
            <h1 className="text-xl mb-8">Connect with Us</h1>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Facebook
              </li>
            </Link>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg  hover:text-gray-50">
                Instagram
              </li>
            </Link>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Twitter
              </li>
            </Link>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Linkedin
              </li>
            </Link>
          </ul>
          <ul className="">
            <h1 className="text-xl mb-8">Make Money with Us</h1>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Sell on Shopify
              </li>
            </Link>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg  hover:text-gray-50">
                Sell under Shopify Accelerator
              </li>
            </Link>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Protect and Build Your Brand
              </li>
            </Link>
            <Link>
              <li className="cursor-pointer text-gray-400 text-lg hover:text-gray-50 ">
                Terms and Conditions
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
