import { delay, motion } from "framer-motion";
import React from "react";

export default function MobileCategory({ open }) {
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
  return (
    <motion.div
      key={open}
      {...animation(renderMobileNavCategory)}
      className="bg-slate-500"
    >
      MobileCategory
    </motion.div>
  );
}
