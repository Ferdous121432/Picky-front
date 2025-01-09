import React from "react";

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

export default function ProductHeaderDetails() {
  return (
    <div className="mx-2 my-2 mb-5 flex w-full flex-col gap-3 px-4 py-2 text-slate-800 md:mb-0 md:px-0 md:py-0">
      <div>
        <h1 className="text-lg font-semibold text-slate-900 lg:text-xl">
          Product Name
        </h1>
        <p className="text-sm text-slate-700">
          SKU : SM-EF59-CWPB-CH90781{" "}
          <span className="text-orange-400">(0)</span>
        </p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <p className="text-md font-semibold text-slate-900">price:</p>
        <p className="text-md font-semibold text-slate-900">$100.00</p>
        <p className="text-sm text-red-700 line-through">$200.00</p>
        <p>(50%)</p>
      </div>
      <div className="border-y-[1px] border-dashed border-slate-400 py-3">
        <p className="text-md font-semibold text-slate-900">
          Color: <span>Red</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-md font-semibold text-slate-900">Size:</p>
        <div className="flex gap-2">
          {sizes.map((item) => (
            <button
              key={item.id}
              className="w-full max-w-[3rem] rounded-md border border-slate-800 px-2 py-1 text-sm text-slate-800"
            >
              {item.size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
