import { motion } from "framer-motion";
import React from "react";

export default function SortedBy({ open, setOpen }) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-between gap-2 py-2 text-xs md:text-sm">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded bg-slate-200 px-2 py-1 text-slate-700"
        onClick={handleClick}
      >
        Filters & Sort
      </motion.button>
    </div>
  );
}
