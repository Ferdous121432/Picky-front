import React, { useState } from "react";
import Layout from "../../Utils/Layout";
import Breadcum from "./Breadcum";
import SortedBy from "./SortedBy";
import { useQuery } from "@tanstack/react-query";
import { motion, spring } from "framer-motion";
import CategoryProducts from "./CategoryProducts";
import Pagination from "./Pagination";
import Filter from "../../Compents/Filter/Filter";

const filterVariants = {
  hidden: {
    width: 0,
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.3,
      spring: 0.3,
    },
  },
  visible: {
    width: "100%",
    display: "block",
    opacity: 1,
    transition: {
      duration: 0.3,
      spring: 0.3,
    },
  },
  exit: {
    width: 0,
  },
};

const productVariants = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: 0,
  },
  exit: {
    width: "100%",
  },
};

export default function CategoryPage() {
  const [open, setOpen] = useState(false);

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return fetch(
        "https://shopperoo-backend.vercel.app/api/v1/products?name=Platinum Saudi Thobe&page=2&limit=4&sort=-1,price",
      ).then((res) => res.json());
    },
  });

  const animation = (variants) => {
    return {
      initial: "hidden",
      animate: open === true ? "visible" : "hidden",
      exit: "exit",
      variants,
    };
  };

  return (
    <Layout>
      <div className="font-bold">
        <div className="flex w-full items-center justify-between bg-slate-300 px-4 text-slate-700 md:px-8 xl:px-12">
          <Breadcum />
          <SortedBy open={open} setOpen={setOpen} />
        </div>
        <div className="flex w-full flex-col md:flex-row">
          {/* TODO: On click filter will slide from left to right */}

          <div className={`${open ? "w-full md:w-[100rem]" : ""}`}>
            <motion.div
              {...animation(filterVariants)}
              className="h-full bg-slate-300 p-10 md:w-[60rem]"
            >
              <div className="h-screen">
                <Filter />
              </div>
            </motion.div>
          </div>
          <motion.div className="transition-all duration-500 ease-in-out">
            <CategoryProducts />
            <Pagination currentPage={2} totalPages={5} />
          </motion.div>
        </div>
        <div className="mb-20" />
      </div>
    </Layout>
  );
}
