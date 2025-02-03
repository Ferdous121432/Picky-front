import { delay, motion } from "framer-motion";
import React from "react";
import {
  newArrival,
  winter,
  sales,
  men,
  women,
  kids,
  newborn,
  footwear,
  accessories,
} from "./../../../Asset/Constants/SubCategoryList";

export default function MobileCategory({ open, category }) {
  const animation = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const renderMobileNavCategory = {
    hidden: {
      opacity: 1,
      y: "-100%",
      transition: {
        staggerChildren: 1.3,
        duration: 2.3,
        ease: "easeOut",
      },
    },
    enter: {
      opacity: 1,

      y: 0,
      transition: {
        staggerChildren: 2.5,
        delay: 2.5,
        duration: 2.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,

      y: "-100%",
      transition: {
        staggerChildren: 2.3,
        delay: 2.3,
        duration: 2.3,
        ease: "easeOut",
      },
    },
  };

  const renderCategoryContent = () => {
    switch (category) {
      case 1:
        return { id: 1, name: "new arrivals", url: `category/new-arrivals` };
      case 2:
        return { id: 2, name: "men", url: `category/men` };
      case 3:
        return { id: 3, name: "women", url: `category/women` };
      case 4:
        return { id: 4, name: "kids", url: `category/kids` };
      case 5:
        return { id: 5, name: "newborn", url: `category/newborn` };
      case 6:
        return { id: 6, name: "accessories", url: `category/accessories` };
      case 7:
        return { id: 7, name: "footwear", url: `category/footwear` };
      case 10:
        return { id: 10, name: "sales", url: `category/sales` };
      case 11:
        return { id: 11, name: "winter/24", url: `category/sales` };
      default:
        return null;
    }
  };

  return (
    <motion.div
      key={open}
      {...animation(renderMobileNavCategory)}
      className="bg-slate-500"
    >
      MobileCategory
      <h1 className="text-2xl font-bold text-white">{category}</h1>
    </motion.div>
  );
}
