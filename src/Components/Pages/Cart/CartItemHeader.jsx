/* eslint-disable */
import React from "react";

export default function CartItemHeader() {
  return (
    <table className="flex w-full flex-col items-center justify-center whitespace-nowrap bg-slate-200 px-16 py-4 font-medium text-slate-800 md:max-w-full md:px-5">
      <thead className="flex w-full min-w-[529px] max-w-full flex-wrap justify-between gap-5">
        <tr className="flex w-full justify-between">
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
    </table>
  );
}
