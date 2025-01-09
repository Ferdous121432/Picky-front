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
    <div className="md:[50%] flex justify-center gap-2 p-2">
      <div className="hidden w-[11%] max-w-[10rem] flex-col items-start justify-start gap-[1px] xs:flex md:w-[15%]">
        {ProductImage.map((item) => (
          <div key={item.id} className="relative w-full">
            <img
              className="w-full object-contain"
              src={item.url}
              alt="Product"
            />
          </div>
        ))}
      </div>
      <div className="relative max-w-[500px] bg-red-900">
        <img
          className="w-full object-contain"
          src="/sale/saleImgOne.webp"
          alt="Product"
        />
        <div className="transform-middle h-16 w-full bg-slate-900"></div>
      </div>
    </div>
  );
}
