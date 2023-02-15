import React from "react";

export const Contact = () => {
  return (
    <div className=" px-10 pt-32 h-screen">
      <div className="">
        <h1 className="text-5xl mb-10">Contact Us</h1>
        <div className="border w-4/6 p-8 ">
          <div className="flex flex-row justify-between">
            <h1 className="inline text-2xl">Name: </h1>
            <input
              className="py-2 bg-yellow-100 outline-none text-2xl w-3/5"
              type="text"
            />
          </div>
          <br />
          <div className="flex flex-row justify-between">
            <h2 className="inline text-2xl ">Phone Number: </h2>
            <input
              className="py-2 bg-yellow-100 outline-none text-2xl w-3/5"
              type="tel"
            />
          </div>
          <br />
          <div className="flex flex-row justify-between">
            <h2 className="inline text-2xl">E-mail: </h2>
            <input
              className="py-2  bg-yellow-100 outline-none text-2xl w-3/5"
              type="email"
            />
          </div>
          <br />
          <button className="text-2xl w-32 bg-yellow-500 text-gray-50 font-lg mt-4 hover:bg-yellow-400 px-2 py-2 rounded-full">
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
