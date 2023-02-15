import React from "react";

export const Login = () => {
  return (
    <>
      <div className="flex flex-row h-screen justify-center items-center">
        <div className="border w-4/6 p-8 ">
          <div className="flex flex-row justify-between">
            <h1 className="inline text-2xl">E-mail: </h1>
            <input
              className="py-2 bg-yellow-100 outline-none text-2xl w-3/5"
              type="email"
            />
          </div>
          <br />
          <div className="flex flex-row justify-between">
            <h2 className="inline text-2xl ">New Password: </h2>
            <input
              className="py-2 bg-yellow-100 outline-none text-2xl w-3/5"
              type="passsword"
            />
          </div>
          <br />
          <div className="flex flex-row justify-between">
            <h2 className="inline text-2xl">Confirm Password: </h2>
            <input
              className="py-2  bg-yellow-100 outline-none text-2xl w-3/5"
              type="passsword"
            />
          </div>
          <br />
          <button className="text-2xl w-32 bg-yellow-500 text-gray-50 font-lg mt-4 hover:bg-yellow-400 px-2 py-2 rounded-full">
            {" "}
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
