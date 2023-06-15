import { SfIconRadioButtonChecked } from "@storefront-ui/react";
import React, { useState } from "react";

export default function ProfileSelection() {
  const profileOptions = [
    "Account Settings",
    "Payment",
    "Saved",
    "Order History",
  ];
  const [selectedOption, setSelectedOption] = useState(2);
  return (
    <div className=" p-1 text-gray-600 profile-container">
      <div className=" font-bold py-2 px-4 border-b border-gray-200">
        Profile
      </div>
      <div className=" py-2">
        {profileOptions.map((item, ind) => (
          <div
            className={` py-3 px-4 rounded ${selectedOption === ind ? "bg-purple-100" : ""}`}
            key={ind}
          >
            <div
              onClick={() => setSelectedOption(ind)}
              className="cursor-pointer"
            >
              <span
                className={`mr-2 ${selectedOption === ind ? "text-purple-600" : ""}`}
              >
                <SfIconRadioButtonChecked />
              </span>
              <span className={` ${selectedOption === ind ? "font-bold" : ""}`}>
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
