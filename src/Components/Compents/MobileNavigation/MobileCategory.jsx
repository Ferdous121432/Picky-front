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
import { Link } from "react-router-dom";

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

  const Subcategory = ({ subcategory }) => {
    return (
      <div className="mt-4 flex w-[60%] flex-col justify-start gap-3">
        {subcategory.map((category) => (
          <Link
            to={`/category/${category.slug}`}
            className="flex items-center justify-center bg-slate-800 text-slate-50"
            key={category.id}
            style={{
              clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
            }}
          >
            <p className="px-2 py-1 uppercase">{category.name}</p>
          </Link>
        ))}
      </div>
    );
  };

  const renderCategoryContent = () => {
    switch (category) {
      case 1:
        return <Subcategory subcategory={newArrival} />;
      case 2:
        return <Subcategory subcategory={men} />;
      case 3:
        return <Subcategory subcategory={women} />;
      case 4:
        return <Subcategory subcategory={kids} />;
      case 5:
        return <Subcategory subcategory={newborn} />;
      case 6:
        return <Subcategory subcategory={accessories} />;
      case 7:
        return <Subcategory subcategory={footwear} />;
      case 10:
        return <Subcategory subcategory={sales} />;
      case 11:
        return <Subcategory subcategory={winter} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      key={open}
      {...animation(renderMobileNavCategory)}
      className="flex h-full w-full items-center justify-center"
    >
      {renderCategoryContent()}
      <h1 className="text-2xl font-bold text-white">{category}</h1>
    </motion.div>
  );
}
