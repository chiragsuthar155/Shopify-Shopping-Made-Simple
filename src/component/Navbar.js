import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { AppBar, CssBaseline, TextField } from "@material-ui/core";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import user from "../assets/user.gif";

export default function Navbar() {
  // useSelector helps us to get the data from the store (It works as subscribe model , means we will get the data as soon as the data in the store changes)
  const items = useSelector((state) => state.cart);
  let cartItems = 0;
  items.forEach((item) => (cartItems += item.qty));

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          background: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1.1rem 2rem",
        }}
      >
        <Link to="/">
          <div className="logo flex flex-row items-center">
            <img className="w-12 mr-2 rounded-full" src={logo} alt="Logo" />
            <h1 className="font-bold  text-2xl text-[#ffc904]">Shopify</h1>
          </div>
        </Link>

        <TextField
          id="outlined-basic"
          placeholder="Search"
          variant="outlined"
          style={{ width: "70%", margin: "0 auto" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <div className="font-bold relative text-lg flex flex-row ">
          <Link to="/login">
            <img
              className="w-6 cursor-pointer mr-4 md:w-10"
              src={user}
              alt="Login/Signup"
            />
          </Link>
          <Link to="/cart">
            <img
              className="w-6 md:w-10"
              src="https://img.icons8.com/parakeet/96/null/shopping-cart.png"
              alt="Shopping Cart"
            />{" "}
            <h1 className="absolute top-0 font-light flex flex-row justify-center items-center right-0 bg-red-500 w-5 text-gray-50 text-center h-5 text-md rounded-full">
              {cartItems}
            </h1>
          </Link>
        </div>
      </AppBar>
    </>
  );
}
