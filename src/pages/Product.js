import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../redux/services/hmServices";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
export default function Product() {
  const { clothCode } = useParams();
  const { data: productData, isFetching: isFetchingProductData } =
    useGetProductDetailsQuery({ clothCode });
  const dispatch = useDispatch();

  if (isFetchingProductData)
    return (
      <>
        <div className="bg-[#ffc904] h-screen flex flex-row items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/241526/screenshots/954930/loader.gif"
            alt="Loading Gif"
          />
        </div>
      </>
    );

  console.log(
    productData.product.articlesList.find((item) => item.modelHeight)
  );

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className=" flex flex-row justify-center gap-3 px-4 pt-24 flex-wrap bg-white ">
        <div className="my-8">
          <h1 className="text-4xl font-bold my-3">
            {
              productData.product.articlesList.find((item) => item.modelHeight)
                .name
            }
          </h1>
          <h1 className="text-4xl font-bold">
            $
            {
              productData.product.articlesList.find((item) => item.modelHeight)
                .whitePrice.price
            }
          </h1>
          <div>
            <p className="text-lg mt-4 border-b-2">Product Info</p>
            <p className="w-96 text-lg mt-4 ">
              {
                productData.product.articlesList.find(
                  (item) => item.modelHeight
                ).description
              }
            </p>
            <p className="text-lg mt-4 border-b-2">Care Instructions</p>
            {productData.product.articlesList
              .find((item) => item.modelHeight)
              .careInstructions.map((item) => (
                <li className="text-lg mt-4">{item}</li>
              ))}
            <p className="text-lg mt-4 border-b-2">View More</p>
            <div className="flex flex-row gap-3 mt-4 flex-wrap w-96">
              {productData.product.articlesList
                .find((item) => item.modelHeight)
                .galleryDetails.map((item) => (
                  <img
                    className="w-16 cursor-pointer hover:scale-125 transition-transform"
                    src={item.baseUrl}
                    onClick={(e) => {
                      const imgSrc = e.target.src;
                      console.log(imgSrc);
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
        <img
          className="w-5/6 md:w-2/5 border-l-2 border-r-2 "
          src={
            productData.product.articlesList.find((item) => item.modelHeight)
              .galleryDetails[1].baseUrl
          }
          alt=""
        />
        <div className="my-8">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-bold my-3 mr-10">Choose Size</h1>
              <h1 className="text-gray-500 ml-10">Size Guide</h1>
            </div>
            <div className="flex flex-row max-w-xs gap-2 my-4 flex-wrap">
              {productData.product.articlesList
                .find((item) => item.modelHeight)
                .variantsList.map((item) => (
                  <h1
                    className=" rounded-full h-10  w-10 flex flex-row justify-center font-medium border-2 text-md p-2 cursor-pointer hover:bg-yellow-400 transition-colors"
                    onClick={(e) => {
                      e.target.classList.add("bg-yellow-200");
                      e.target.classList.add("text-gray-50");
                    }}
                  >
                    {item.size.name}
                  </h1>
                ))}
            </div>
            <h1 className="text-xl font-bold ">Choose Color</h1>
            <div>
              {
                <p
                  className="p-4 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: productData.product.articlesList.find(
                      (item) => item.modelHeight
                    ).color.rgbColor,
                  }}
                ></p>
              }
            </div>
            <h1 className="text-xl font-bold ">Material Type</h1>
            <div>
              {productData.product.articlesList
                .find((item) => item.modelHeight)
                .compositions[0].materials.map((item) => (
                  <p className="text-lg mt-4">
                    {item.name} {item.percentage}%
                  </p>
                ))}
            </div>
            <button
              onClick={() =>
                handleAdd(
                  productData.product.articlesList.find(
                    (item) => item.modelHeight
                  )
                )
              }
              className="w-52 bg-yellow-500 text-gray-50 font-lg mt-4 hover:bg-yellow-400 px-2 py-3 rounded-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
