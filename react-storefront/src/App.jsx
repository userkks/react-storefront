import React from "react";
import './index.css'
import Header from "./components/Header";
import ProfileSelection from "./components/ProfileSelection";
import ProductItems from "./components/ProductItems";

export default function App() {
  return (
    <div>
      <Header/>
      <div className="mt-4 flex justify-center w-full">
        <div className="w-4/5 flex">
          <div className="w-1/4">
            <ProfileSelection/>
          </div>
          <div className="w-3/4">
            <ProductItems/>
          </div>
        </div>
      </div>
    </div>
  );
}
