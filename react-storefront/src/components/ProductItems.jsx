import React from "react";
import watch from "../assets/watch.jpg";

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
                <div className="default-container h-32 w-32 border border-gray-200 rounded-md">
                  <img src={watch} alt="Watch" />
                </div>
                <div  className="ml-5 w-52">
                  <div>Smartwatch Fitness Tracker</div>
                  <div className=" text-xs">
                    Blood pressure monitor + Activity tracker + Phone call +
                    Heart rate monitor
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
