import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cartGif from "../assets/empty-cart.gif";
import { remove } from "../redux/cartSlice";
export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="flex flex-row flex-wrap  md:gap-10 gap-8 pt-24 bg-[#ffc904] justify-center">
      {items.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img src={cartGif} alt="Cart Image" />
          <h1 className="text-3xl font-bold mt-10">Your Cart is Empty</h1>
        </div>
      ) : (
        items.map((item, i) => (
          <div
            key={i}
            className="flex flex-row justify-start px-3 sm:px-5 md:px-10  pt-0  bg-white items-center w-full border cursor-pointer"
          >
            <img
              className="w-12 sm:w-16 md:w-32 "
              src={
                item.images
                  ? item.images[0].baseUrl
                  : item.galleryDetails[0].baseUrl
              }
            />
            <h1 className="ml-4 md:ml-8 mr-3 font-lg text-md md:text-xl w-full  my-3 ">
              {item.name}
            </h1>
            <h1 className=" font-lg text-md md:text-xl w-32 my-3 ">
              Qty: {item.qty}
            </h1>
            <p className="w-64 text-md md:text-lg">
              Price:{" "}
              {item.price
                ? item.price.formattedValue
                : "$ " + item.whitePrice.price}
            </p>
            <button
              onClick={() => handleRemove(item.code)}
              className="text-md p-1 md:p-3 md:text-lg rounded-lg text-gray-50 bg-yellow-500  hover:bg-yellow-400"
            >
              Remove
            </button>
            <button className="text-md p-1 md:p-3 w-36 md:text-lg rounded-lg text-gray-50 ml-3 bg-green-500  hover:bg-green-400">
              Buy
            </button>
          </div>
        ))
      )}
    </div>
  );
}
