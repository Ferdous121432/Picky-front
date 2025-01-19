/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";

import { ProductImage } from "../../../Asset/Image/productimage/ProductImage";

import { AnimatePresence, motion } from "framer-motion";

const ProductCard = ({
  image,
  discount,
  newProduct,
  name,
  description,
  price,
  oldPrice,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsHovered(true);
    }
  }, [window.innerWidth, isHovered]);

  const animation = (variants) => {
    return {
      initial: "hidden",
      animate: isHovered ? "visible" : "hidden",
      exit: "exit",
      variants: variants,
    };
  };

  const transition = {
    hidden: { opacity: 1, y: 100, transition: { duration: 1 } },
    visible: { opacity: 1, y: -15, transition: { duration: 1 } },
    exit: { opacity: 0, y: 100, transition: { duration: 1 } },
  };

  const ProductImages = ProductImage;

  return (
    <AnimatePresence mode="wait">
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg px-10 shadow-xl xs:px-0"
      >
        <div className="text-base relative flex w-full flex-col items-center justify-center whitespace-nowrap font-medium">
          <div className="relative z-0">
            <img
              loading="lazy"
              // src={image}
              src={ProductImages[0].src}
              alt={name}
              className="aspect-square"
            />

            <motion.div
              {...animation(transition)}
              className="absolute bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center gap-4 px-4"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-slate-100 bg-opacity-[.85] px-4 text-[1.2rem] text-slate-700 hover:text-red-800">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center bg-slate-100 bg-opacity-[.85] px-4 text-[1.2rem] text-slate-700 hover:text-red-800">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </motion.div>
          </div>
          {discount && (
            <div className="absolute left-5 top-5">
              <div className="relative mb-0 h-12 w-12 rounded-full bg-red-800 bg-opacity-[.9] px-1.5">
                <span className="transform-middle text-lg font-semibold text-slate-100">
                  {discount}
                </span>
              </div>
            </div>
          )}
          {newProduct && (
            <div className="absolute right-[50%] top-7 translate-x-[50%]">
              <div className="relative w-full rounded bg-slate-900 bg-opacity-[.9] px-14 py-4">
                <span className="transform-middle w-full text-sm font-semibold uppercase text-slate-100">
                  New
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-20 flex w-full flex-col items-start bg-slate-50 px-4 pb-8 pt-4">
          <h3 className="text-lg font-semibold leading-tight text-slate-700 hover:text-red-800">
            {name}
          </h3>

          <div className="mt-2 flex items-center gap-4 self-stretch">
            <span className="my-auto self-stretch text-md font-normal text-slate-800">
              <FontAwesomeIcon
                className="fa-sm font-thin text-slate-900"
                icon={faBangladeshiTakaSign}
              />
              {price}
            </span>
            {oldPrice && (
              <span className="relative my-auto self-stretch decoration-slice px-2 text-md text-red-800 line-through">
                {oldPrice}
                <span className="absolute left-0 top-[50%] h-[2px] w-full bg-red-700"></span>
              </span>
            )}
          </div>
        </div>
      </article>
    </AnimatePresence>
  );
};

export default ProductCard;
