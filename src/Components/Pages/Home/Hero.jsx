import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    url: "./hero/sailor1.jpg",
    alt: "Pickystore",
    link: "/category/sales",
  },
  {
    id: 2,
    url: "./hero/sailor2.jpg",
    alt: "Pickystore",
    link: "/category/sales",
  },
];

export default function Hero() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={`w-screen`}>
              <Link to={image.link}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`w-screen object-fill`}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
