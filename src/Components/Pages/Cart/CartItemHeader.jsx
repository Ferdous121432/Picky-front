/* eslint-disable */
import React from "react";

export default function CartItemHeader() {
  return (
    <table className="flex w-full flex-col items-center justify-center whitespace-nowrap bg-slate-200 px-4 py-4 font-medium text-slate-800 md:max-w-full">
      <thead className="flex w-full max-w-full justify-between gap-2">
        <tr className="flex w-full flex-wrap justify-between">
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
