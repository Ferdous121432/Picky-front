/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { addToCart } from "../../../hooks/apiCart";
import { useAuth } from "../../../context/AuthProvider";

import { AnimatePresence, motion } from "framer-motion";
import FavButton from "../Favorite/FavButton";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { state } = useAuth();

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

  // ADD TO CART FUNCTIONALITY

  console.log(product);

  let add_cart_data = {
    product_id: product._id,
    slug: product.slug,
    image: product.imageCover.split("/").slice(-1).join(),
    quantity: product.quantity ? product.quantity : 1,
    color: product.color,
    productName: product.name,
    price: product.price,
    subtotal: product.price * (product.quantity ? product.quantity : 1),
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    addToCart(add_cart_data, state.token);
  };

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
              src={product.imageCover}
              alt={name}
              className="aspect-square transform transition-transform duration-300 ease-in-out hover:scale-105"
            />

            <motion.div
              {...animation(transition)}
              className="absolute bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center gap-4 px-4"
            >
              <div
                onClick={handleAddToCart}
                className="flex h-10 w-10 items-center justify-center bg-slate-100 bg-opacity-[.85] px-4 text-[1.2rem] text-slate-700 hover:text-red-800"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center bg-slate-100 bg-opacity-[.85] px-4 text-[1.2rem] text-slate-700 hover:text-red-800">
                <FavButton />
              </div>
            </motion.div>
          </div>
          {product.discount && (
            <div className="absolute left-5 top-5">
              <div className="relative mb-0 h-12 w-12 rounded-full bg-red-800 bg-opacity-[.9] px-1.5">
                <span className="transform-middle text-lg font-semibold text-slate-100">
                  {product.discount}
                </span>
              </div>
            </div>
          )}
          {product.newProduct && (
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
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-4 self-stretch">
            <span className="my-auto self-stretch text-md font-normal text-slate-800">
              <FontAwesomeIcon
                className="fa-sm font-thin text-slate-900"
                icon={faBangladeshiTakaSign}
              />
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="relative my-auto self-stretch decoration-slice px-2 text-md text-red-800 line-through">
                {product.oldPrice}
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
