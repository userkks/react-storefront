import React from "react";
import logo from "../assets/logo.jpg";
import { SfIconExpandMore, SfIconFavorite, SfIconLocationOnFilled, SfIconPerson, SfIconSearch, SfIconShoppingCart, SfInput } from "@storefront-ui/react";

export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className=" w-4/5 flex items-center justify-evenly border-b border-gray-300 py-4">
        <div className=" default-container w-20">
          <img src={logo} alt="Brand logo" />
        </div>
        <div className=" font-bold text-purple-600">
          <span className="mr-2">
            <SfIconLocationOnFilled size="sm" />
          </span>
          <span className=" mr-2">9384 Abott Lane Grand Prairie Tx, 40394</span>
          <span><SfIconExpandMore/></span>
        </div>
        <div className=" w-2/5">
          <SfInput placeholder="Search" slotSuffix={<SfIconSearch />}/>
        </div>
        <div className="text-purple-600 font-bold">
          <span className="mr-5">
            <SfIconShoppingCart />
          </span>
          <span className="mr-5">
            <SfIconFavorite />
          </span>
          <span>
            <SfIconPerson/>
          </span>
        </div>
      </div>
    </div>
  );
}
