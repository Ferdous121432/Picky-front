import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import MaxWidth81 from "../../Utils/MaxWidth81";

export default function () {
  return (
    <div className="w-full border-b-[1px] border-b-gray-200 bg-white py-4 text-lg md:py-8 lg:py-12">
      {/* <MaxWidth81>
        <div className="max-w-container mx-auto flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:py-2">
          <div className="flex w-72 items-center gap-2 shadow-sm duration-300 hover:shadow-md">
            <span className="font-titleFont w-6 text-center font-bold">2</span>
            <p className="">Two years warranty</p>
          </div>
          <div className="flex w-72 items-center gap-2 shadow-sm duration-300 hover:shadow-md md:w-auto">
            <span className="ml-1 w-6 text-center text-xl">
              <LocalShippingIcon />
            </span>
            <p className="">Free shipping</p>
          </div>
          <div className="flex w-72 items-center gap-2 shadow-sm duration-300 hover:shadow-md md:w-auto">
            <span className="w-6 text-center text-2xl">
              <KeyboardReturnIcon />
            </span>
            <p className="">Return policy in 30 days</p>
          </div>
        </div>
      </MaxWidth81> */}
      <div className="flex flex-col md:flex-row">
        <div>
          <img
            src="./public/hero/sailor3.webp"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div>
          <img
            src="./public/hero/sailor4.webp"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
