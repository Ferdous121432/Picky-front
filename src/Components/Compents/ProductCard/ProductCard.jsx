/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";

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
    visible: { opacity: 1, y: -80, transition: { duration: 1 } },
    exit: { opacity: 0, y: 100, transition: { duration: 1 } },
  };

  return (
    <AnimatePresence mode="wait">
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <div className="text-base relative flex w-full flex-col items-center justify-center whitespace-nowrap font-medium">
          <div className="relative z-0">
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="aspect-square"
            />

            <motion.div
              {...animation(transition)}
              className="absolute top-[100%] z-10 flex h-20 w-full items-center justify-center gap-0 bg-slate-200 px-4"
            >
              <div className="flex h-full w-full items-center justify-end px-4 text-[2rem] text-slate-700 hover:text-red-800">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="justify-star flex h-full w-full items-center px-4 text-[2rem] text-slate-700 hover:text-red-800">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </motion.div>
          </div>
          {discount && (
            <div className="absolute left-5 top-5">
              <div className="relative mb-0 h-12 w-12 rounded-full bg-red-400 fill-red-400 px-1.5 max-md:mb-2.5">
                <span className="transform-middle text-sm font-semibold text-slate-100">
                  {discount}
                </span>
              </div>
            </div>
          )}
          {newProduct && (
            <div className="absolute right-5 top-5">
              <div className="relative h-12 w-12 rounded-full bg-teal-800">
                <span className="transform-middle text-sm font-semibold text-slate-100">
                  New
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-20 flex w-full flex-col items-start bg-gray-100 px-4 pb-8 pt-4">
          <h3 className="text-2xl font-semibold leading-tight text-neutral-700 hover:text-red-800">
            {name}
          </h3>

          <div className="mt-2 flex items-center gap-4 self-stretch">
            <span className="my-auto self-stretch text-xl font-normal text-slate-800">
              <FontAwesomeIcon
                className="fa-md font-thin text-slate-800"
                icon={faBangladeshiTakaSign}
              />{" "}
              {price}
            </span>
            {oldPrice && (
              <span className="relative my-auto self-stretch decoration-slice px-2 text-lg line-through">
                {oldPrice}
                <span className="absolute left-0 top-[50%] h-[3px] w-full bg-red-700"></span>
              </span>
            )}
          </div>
        </div>
      </article>
    </AnimatePresence>
  );
};

export default ProductCard;
