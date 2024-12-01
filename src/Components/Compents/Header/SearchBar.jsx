import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const animation = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const placeholderVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SearchBar() {
  return (
    <AnimatePresence>
      <div>
        <div className="text-base text-primeColor relative flex h-[50px] w-full items-center justify-between gap-2 rounded-xl bg-white px-6 lg:w-[500px]">
          <div>
            <motion.div {...animation(placeholderVariants)}>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
            </motion.div>
            <motion.select
              {...animation(placeholderVariants)}
              className="text-base bg-transparent outline-none"
            >
              <option value="all">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </motion.select>
          </div>
          <input
            className="h-full flex-1 outline-none placeholder:text-[14px] placeholder:text-[#C4C4C4]"
            type="text"
            // onChange={handleSearch}
            // value={searchQuery}
            placeholder="Search your products here"
          />
          <SearchIcon className="h-5 w-5" />
        </div>
      </div>
    </AnimatePresence>
  );
}
