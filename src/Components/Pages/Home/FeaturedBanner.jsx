import React from "react";

export default function FeaturedBanner({ image }) {
  return (
    <div className="w-full border-b-[1px] border-b-gray-200 bg-white py-4 text-lg">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        {image.map((img, index) => (
          <div key={index} className="w-full md:w-1/2">
            <img src={img.image} alt="" className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
