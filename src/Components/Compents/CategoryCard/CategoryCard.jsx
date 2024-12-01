import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function CategoryCard({ title, image }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const animation = (variants) => {
    return {
      initial: "initial",
      animate: isHovered ? "enter" : "initial",
      exit: "exit",
      variants,
    };
  };

  const divLength = {
    initial: {
      width: "40%",

      transition: { duration: 0.5 },
    },
    enter: {
      width: "90%",

      transition: { duration: 0.5 },
    },
    exit: { height: 0 },
  };

  const h1Color = {
    initial: {
      color: "#1e293b",
      //   textAlign: "center",
      transition: { duration: 0.5 },
    },
    enter: {
      color: "#991b1b",
      //   textAlign: "left",
      transition: { duration: 0.5 },
    },
    exit: {
      color: "#1e293b",
      textAlign: "center",
      transition: { duration: 0.5 },
    },
  };

  const arrowOpacity = {
    initial: {
      opacity: 0,

      transition: { duration: 0.5 },
    },
    enter: {
      opacity: 1,

      transition: { duration: 0.5 },
    },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <div
        className="relative text-md font-semibold md:text-lg xl:text-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img
            src={image}
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>
        <motion.div
          className={`absolute bottom-4 left-[50%] flex translate-x-[-50%] items-center justify-between bg-slate-50 px-10`}
          {...animation(divLength)}
        >
          <div>
            <motion.h1
              className={`w-full bg-slate-50 px-4 py-4 text-red-800 hover:text-red-800`}
              {...animation(h1Color)}
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            className="flex items-center justify-center"
            {...animation(arrowOpacity)}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
