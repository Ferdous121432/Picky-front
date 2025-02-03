import React, { useState } from "react";
import AddToCard from "../../Compents/Card/AddToCard";
import FavButton from "../../Compents/Favorite/FavButton";

const sizes = [
  {
    id: 1,
    size: "S",
  },
  {
    id: 2,
    size: "M",
  },
  {
    id: 3,
    size: "L",
  },
  {
    id: 4,
    size: "XL",
  },
  {
    id: 5,
    size: "XXL",
  },
];

export default function ProductHeaderDetails({
  details,
  handleAddToCart,
  setProductSize,
}) {
  const discount = details.old_price
    ? `${Math.floor(((details.old_price - details.price) / details.old_price) * 100)}`
    : "";

  const [selectedSize, setSelectedSize] = useState("");
  const handleProductSize = (size) => {
    setProductSize(size);
    setSelectedSize(size);
    console.log(selectedSize);
  };

  return (
    <div className="mx-2 my-2 mb-5 flex w-full flex-col gap-3 px-4 py-2 text-slate-800 md:mb-0 md:px-0 md:py-0">
      <div>
        <h1 className="text-lg font-semibold text-slate-900 lg:text-xl">
          {details.name}
        </h1>
        <p className="text-sm uppercase text-slate-700">
          SKU : {details.product_code}
          <span className="text-orange-400">(0)</span>
        </p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <p className="text-md font-semibold text-slate-900">price:</p>
        <p className="text-md font-semibold text-slate-900">${details.price}</p>
        <p className="text-sm text-red-700 line-through">
          {details.old_price ? `$${details.old_price}` : ""}
        </p>
        <p>{details.old_price ? `(${discount}%)` : ""}</p>
      </div>
      <div className="border-y-[1px] border-dashed border-slate-400 py-3">
        <p className="text-md font-semibold text-slate-900">
          Color: <span>{details.color}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-md font-semibold text-slate-900">Size:</p>
        <div className="flex gap-2">
          {sizes.map((item) => (
            <button
              key={item.id}
              onClick={() => handleProductSize(item.size)}
              className={`w-full max-w-[3rem] rounded-md border px-2 py-1 text-sm ${
                selectedSize === item.size
                  ? "bg-slate-800 text-white"
                  : "border-slate-800 text-slate-800"
              }`}
            >
              {item.size}
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-start gap-4">
          <AddToCard handleAddToCart={handleAddToCart} />
          <FavButton />
        </div>
      </div>
    </div>
  );
}
