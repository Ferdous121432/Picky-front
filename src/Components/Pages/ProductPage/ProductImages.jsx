import React from "react";

const ProductImage = [
  {
    id: 1,
    url: "/sale/saleImgOne.webp",
  },
  {
    id: 2,
    url: "/sale/saleImgOne.webp",
  },
  {
    id: 3,
    url: "/sale/saleImgOne.webp",
  },
  {
    id: 4,
    url: "/sale/saleImgOne.webp",
  },
  {
    id: 5,
    url: "/sale/saleImgOne.webp",
  },
  {
    id: 6,
    url: "/sale/saleImgOne.webp",
  },
];

export default function ProductImages() {
  return (
    <div className="flex gap-2 bg-slate-600">
      <div className="grid h-full w-[10vw] grid-cols-2 items-start justify-center">
        {ProductImage.map((item) => (
          <div key={item.id} className="relative h-full w-[100px] p-1">
            <img
              className="h-full w-full object-contain"
              src={item.url}
              alt="Product"
            />
          </div>
        ))}
      </div>
      <div className="relative col-span-2 w-[500px]">
        <img
          className="h-full w-full object-contain"
          src="/sale/saleImgOne.webp"
          alt="Product"
        />
      </div>
    </div>
  );
}
