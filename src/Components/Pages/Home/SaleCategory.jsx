import React from "react";

export default function SaleCategory() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="h-full bg-red-500">
        <img
          src="./sale/pickySale4.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="flex h-full w-full flex-col lg:w-[50%]">
        <div
          className="h-full w-full bg-red-500 bg-cover"
          style={{ backgroundImage: "url('./sale/pickySale3.jpg')" }}
        ></div>
        <div
          className="h-full w-full bg-green-500 bg-cover"
          style={{ backgroundImage: "url('./sale/pickySale1.jpg')" }}
        ></div>
      </div>
    </div>
  );
}
