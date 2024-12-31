import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FilterName from "./FilterName";
import { use } from "react";

const heightVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  enter: {
    height: "auto",
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function FilterOptions({ options, name }) {
  const { register, handleSubmit } = useForm();
  const [filterOpen, setFilterOpen] = React.useState(false);
  const filterData = [];
  const sortData = [];

  const handleCheckboxChange = (event) => {
    const label = event.target.nextSibling;
    const span = label.querySelector("span");

    if (event.target.checked) {
      span.style.backgroundColor = "black";
      if (!filterData.includes(event.target.name)) {
        filterData.push(event.target.name);
      }
    } else {
      span.style.backgroundColor = "white";
    }

    if (!event.target.checked) {
      const index = filterData.indexOf(event.target.name);
      filterData.splice(index, 1);
    }
    console.log(filterData);
  };

  const animation = (variants) => {
    return {
      initial: "hidden",
      animate: filterOpen ? "enter" : "hidden",
      exit: "exit",
      variants,
    };
  };

  return (
    <div>
      <FilterName
        name={name}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />
      <motion.div {...animation(heightVariants)} id={name} data-testid={name}>
        {options.map((option, index) => (
          <div
            key={index}
            className="my-2 flex items-center justify-start gap-2"
          >
            <input
              className="hidden"
              type="checkbox"
              name={option}
              id={option}
              onChange={(e) => {
                handleCheckboxChange(e);
                e.target.value = e.target.checked ? true : false;
              }}
            />
            <label
              className="flex items-center justify-start gap-2 capitalize"
              htmlFor={option}
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-solid border-slate-900 bg-slate-50 p-1">
                <span className="inline-block h-full w-full rounded-full"></span>
              </div>
              {option}
            </label>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
