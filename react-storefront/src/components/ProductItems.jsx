import React from "react";
import watch from "../assets/watch.jpg";
import { SfButton, SfIconFavorite, SfIconShoppingCart } from "@storefront-ui/react";

export default function ProductItems() {
  const productCount = 6;
  return (
    <div className=" ml-8">
      <div>
        <div className=" border-b border-gray-200 font-bold text-2xl pb-7">
          Saved
        </div>
        <div className=" mt-7 flex flex-wrap text-gray-600">
          {new Array(productCount).fill(1).map((i) => (
            <div key={i}>
              <div className="flex m-3">
                <div className="default-container h-32 w-32 border border-gray-200 rounded-md relative">
                  <img src={watch} alt="Watch" />
                  <div className=" cursor-pointer default-container h-6 w-6 absolute rounded-full border border-purple-600 text-purple-600 bottom-1 right-1">
                    <SfIconFavorite size="xs"/>
                </div>
                </div>
                <div className=" ml-3 w-56">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div>Smartwatch Fitness Tracker</div>
                      <div className=" text-xs">
                        Blood pressure monitor + Activity tracker + Phone call +
                        Heart rate monitor
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className=" font-bold">$2,345.99</div>
                        <SfButton className=" bg-purple-600 hover:bg-purple-800" size="sm"><SfIconShoppingCart/> Add to Cart</SfButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

