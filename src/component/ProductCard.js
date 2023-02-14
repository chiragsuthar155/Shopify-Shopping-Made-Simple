import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { useGetSearchResultsQuery } from "../redux/services/hmServices";

export default function ProductCard() {
  const dispatch = useDispatch();
  const { data: productsData, isFetching: isFetchingProductsData } =
    useGetSearchResultsQuery();
  if (isFetchingProductsData)
    return (
      <div className="bg-[#ffc904] h-screen flex flex-row items-center justify-center">
        <img
          src="https://cdn.dribbble.com/users/241526/screenshots/954930/loader.gif"
          alt="Loading Gif"
        />
      </div>
    );

  function handleAdd(product) {
    // here product is the payload
    dispatch(add(product));
  }
  return (
    <div className="flex flex-row flex-wrap  pt-32 md:gap-10 gap-8 py-8 justify-center bg-[#ffc904]">
      {productsData.results.map((item, i) => (
        <div
          key={i}
          className="flex flex-col justify-start   pt-0 pb-7 bg-white items-center w-96 border cursor-pointer hover:scale-110 transition transform duration-900"
        >
          <Link
            className="flex flex-col justify-center items-center"
            to={`/clothes-details/${item.articles[0].code}`}
          >
            <img
              className="w-64 transition-all"
              src={item.images[0].baseUrl}
              onMouseOver={(e) => {
                e.target.setAttribute(
                  "src",
                  item.defaultArticle.normalPicture[0].baseUrl
                );
              }}
              onMouseLeave={(e) => {
                e.target.setAttribute("src", item.images[0].baseUrl);
              }}
            />
            <h1 className="text-center font-semibold text-lg w-full px-2 my-3 ">
              {item.name}
            </h1>
            {/* <p className="text-sm">{item.description.slice(0, 190)}...</p> */}
            <p className="text-lg text-center">
              Price: {item.price.formattedValue}
            </p>
          </Link>
          <button
            onClick={() => handleAdd(item)}
            className="w-32 bg-yellow-500 text-gray-50 font-lg mt-4 hover:bg-yellow-400 px-2 py-2 rounded-full"
          >
            Add To Cart
          </button>
          {/* <div className="flex flex-row max-w-xs gap-2 my-4 ">
              {item.name.slice(-5) == "Pants"
                ? ""
                : item.variantSizes.map((item) => (
                    <h1
                      className=" rounded-full h-10 w-10 flex flex-row justify-center font-medium border-2 text-md p-2 "
                      onClick={(e) => {
                        e.target.classList.add("bg-yellow-200");
                        e.target.classList.add("text-gray-50");
                      }}
                    >
                      {item.filterCode}
                    </h1>
                  ))}
            </div> */}
        </div>
      ))}
    </div>
  );
}
