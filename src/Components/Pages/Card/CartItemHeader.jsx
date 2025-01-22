/* eslint-disable */
import React from "react";

export default function CartItemHeader() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-4 w-full text-base font-medium text-black whitespace-nowrap bg-orange-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[529px]">
        <div>Product</div>
        <div>Price</div>
        <div className="flex gap-9">
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Subtotal</div>
        </div>
      </div>
    </div>
  );
}
