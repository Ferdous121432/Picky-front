import React from "react";

export default function CategoryCard() {
  return (
    <div>
      <div>
        <img
          src="./public/sale/pickySale4.jpg"
          alt="Product"
          className="aspect-square"
        />
      </div>
      <div className="absolute top-0 bg-slate-50">
        <h1 className="text-slate-800 hover:text-red-800">Product</h1>
      </div>
    </div>
  );
}
