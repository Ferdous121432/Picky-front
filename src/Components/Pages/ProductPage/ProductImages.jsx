import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

export default function ProductImages({ images }) {
  const totalImage = images.length - 1;
  const [image, setImage] = useState(0);

  const handlePrevClick = () => {
    setImage((prevImage) => (prevImage === 0 ? totalImage : prevImage - 1));
  };

  const handleNextClick = () => {
    setImage((prevImage) => (prevImage === totalImage ? 0 : prevImage + 1));
  };

  return (
    <div className="md:[50%] flex justify-center gap-2 p-2">
      <div className="hidden w-[11%] max-w-[10rem] flex-col items-start justify-start gap-[1px] xs:flex md:w-[15%]">
        {images.map((item, index) => (
          <div
            onClick={() => setImage(index)}
            key={index}
            className="relative w-full"
          >
            <img className="w-full object-contain" src={item} alt="Product" />
          </div>
        ))}
      </div>
      <div className="relative max-w-[500px] bg-red-900">
        <img
          className="w-full object-contain"
          src={images[image]}
          alt="Product"
        />
        <div className="transform-middle flex h-16 w-full justify-between p-4">
          <FontAwesomeIcon
            className="text-2xl text-slate-100"
            icon={faArrowLeft}
            onClick={handlePrevClick}
          />
          <FontAwesomeIcon
            className="text-2xl text-slate-100"
            icon={faArrowRight}
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
}
