import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import ProductCard from "../../Compents/ProductCard/ProductCard";
import useQueryHook from "../../../hooks/useQueryHook";
import { url_productsCategory } from "../../../hooks/urls";
import { Link } from "react-router-dom";

function ProductsSection({ title, description }) {
  const slider = React.useRef(null);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const url = `${url_productsCategory}/all?page=1&limit=5`;

  const {
    data: productdata,
    isLoading,
    isFetching,
    status,
    isError,
    error,
  } = useQueryHook("products", url);

  if (isLoading) return <div>Loading...</div>;

  const products = productdata?.data?.products;
  console.log(products);

  return (
    <section className="mt-[1rem] flex flex-col items-center justify-center">
      <h2 className="mb-2 text-center text-xl font-bold leading-tight text-slate-700 lg:text-2xl">
        {title}
      </h2>
      {description && (
        <div className="mb-4 flex items-center justify-center rounded-full bg-red-700 px-8 py-2">
          <p className="text-center text-sm font-bold leading-tight text-slate-100 lg:text-md">
            {description}
          </p>
        </div>
      )}
      <div className="relative m-auto mt-[0.5rem] w-full flex-wrap items-center justify-center gap-4 md:px-6">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1030: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1540: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product._id}>
              <Link to={`/product/${product.slug}`}>
                <ProductCard product={product} modules={[Autoplay]} />
              </Link>
            </SwiperSlide>
          ))}
          <div
            className="justify-left absolute left-0 top-[45%] z-40 flex h-10 w-10 items-center bg-red-600 p-2"
            style={{
              backgroundColor: "rgba(248, 250, 252,1)",
            }}
            ref={navigationPrevRef}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: "2rem",
                color: "#0f172a",
              }}
            />
          </div>
          <div
            className="absolute right-0 top-[45%] z-40 flex h-10 w-10 items-center justify-center p-2"
            ref={navigationNextRef}
            style={{
              backgroundColor: "rgba(248, 250, 252,1)",
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: "2rem",
                color: "#0f172a",
              }}
            />
          </div>
        </Swiper>
      </div>
      <button className="text-base mb-12 mt-8 w-[15.3125rem] max-w-full border border-solid border-yellow-600 bg-white px-[1rem] py-[0.1875rem] font-semibold text-yellow-600 max-md:px-[0.3125rem]">
        Explore More
      </button>
    </section>
  );
}

export default ProductsSection;
