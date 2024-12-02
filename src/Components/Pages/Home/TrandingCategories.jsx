import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CategoryCard from "../../Compents/CategoryCard/CategoryCard";
import MaxWidth81 from "../../Utils/MaxWidth81";

function TrendingCategories() {
  const slider = React.useRef(null);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const categoris = [
    {
      id: 1,
      image: "./public/sale/pickySale4.jpg",
      name: "Category 1",
    },
    {
      id: 2,
      image: "./public/sale/pickySale4.jpg",
      name: "Category 2",
    },
    {
      id: 3,
      image: "./public/sale/pickySale4.jpg",
      name: "Category 3",
    },
    {
      id: 4,
      image: "./public/sale/pickySale4.jpg",
      name: "Category 4",
    },
    {
      id: 5,
      image: "./public/sale/pickySale4.jpg",
      name: "Category 5",
    },
  ];

  return (
    // <MaxWidth81>
    <section className="mb-10 mt-[1rem] flex w-full flex-col items-center justify-center gap-2 md:gap-4">
      <h2 className="mb-4 text-center text-[2.5rem] font-bold leading-tight text-neutral-700">
        Trending Categories
      </h2>
      <div className="m-auto w-full gap-2 md:gap-4 md:px-6">
        <div className="grid grid-flow-row grid-cols-1 justify-between gap-2 md:gap-4 lg:grid-cols-3">
          <div className="aspect-square gap-2 bg-slate-600 md:gap-4">
            <CategoryCard
              title="Men"
              image="./public/category/pickySale3.jpg"
            />
          </div>
          <div className="flex aspect-[2/1] w-full flex-col gap-2">
            <div className="h-full w-full gap-2 bg-red-400 md:gap-4">6</div>

            <div className="h-full w-full gap-2 bg-yellow-900 md:gap-4">3</div>
          </div>
          <div className="aspect-square w-full gap-2 bg-green-700 md:gap-4">
            <CategoryCard
              title="Women"
              image="./public/category/pickySale1.jpg"
            />
          </div>
        </div>
      </div>
    </section>
    // </MaxWidth81>
  );
}

export default TrendingCategories;
