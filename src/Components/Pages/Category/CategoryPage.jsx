import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../../Utils/Layout";
import Breadcum from "./Breadcum";
import SortedBy from "./SortedBy";
import { useQuery } from "@tanstack/react-query";
import { motion, spring } from "framer-motion";
import CategoryProducts from "./CategoryProducts";
import Pagination from "./Pagination";
import Filter from "../../Compents/Filter/Filter";
import { data } from "autoprefixer";
import { url_productsCategory } from "../../../hooks/urls";

import {
  filterVariants,
  productVariants,
  animation,
} from "../../Utils/AnimationHooks/CategoryPageAnimation";

export default function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState("");
  let { category_name } = useParams();
  const url = `${url_productsCategory}/all`;

  useEffect(() => {
    setParams(category_name);
    console.log(category_name);
  }, [category_name]);

  // const fetchProducts = async () => {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   return response.json();
  // };

  //TODO: Cache API data

  const apiCache = {};

  const fetchProducts = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: [params],
    queryFn: fetchProducts,
  });
  const category_products = products?.data?.products;
  console.log(category_products);

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
            <CategoryProducts category_products={category_products} />
            <Pagination currentPage={2} totalPages={5} />
          </motion.div>
        </div>
        <div className="mb-20" />
      </div>
    </Layout>
  );
}
