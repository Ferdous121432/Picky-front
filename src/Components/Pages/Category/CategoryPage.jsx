import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { motion, spring } from "framer-motion";
import useQueryHook from "../../../hooks/useQueryHook";

import { url_productsCategory } from "../../../hooks/apiURL";
import SpinnerFullPage from "../../Compents/Spinner/SpinnerFullPage";
import Layout from "../../Utils/Layout";
import Breadcum from "./Breadcum";
import SortedBy from "./SortedBy";
import CategoryProducts from "./CategoryProducts";
import Pagination from "./Pagination";
import Filter from "../../Compents/Filter/Filter";

import {
  filterVariants,
  productVariants,
  animation,
} from "../../Utils/AnimationHooks/CategoryPageAnimation";
import ErrorPage from "../ErrorPage/ErrorPage";
import { nav } from "framer-motion/client";

export default function CategoryPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [params, setParams] = useState("");
  let { category_name } = useParams();

  const url = `${url_productsCategory}/all?page=${page}&limit=${limit}`;

  const searchParams = new URLSearchParams(window.location.search);
  const initialPage = searchParams.get("page");
  const initialLimit = searchParams.get("limit");

  useEffect(() => {
    if (initialPage) setPage(Number(initialPage));
    if (initialLimit) setLimit(Number(initialLimit));
  }, []);

  useEffect(() => {
    navigate(`/category/${category_name}?page=${page}&limit=${limit}`);
  }, [page, limit, navigate, category_name]);

  useEffect(() => {
    setParams(category_name);
  }, [category_name]);

  const {
    isLoading,
    isFetching,
    status,
    data: products,
    error,
  } = useQueryHook(params, url);

  const category_products = products?.data?.products;
  console.log(category_products);

  if (isFetching) return <SpinnerFullPage />;
  if (error) return <ErrorPage />;

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
            <Pagination
              page={page}
              setPage={setPage}
              currentPage={products?.currentPage}
              totalPages={products?.pageNumbers}
            />
          </motion.div>
        </div>
        <div className="mb-20" />
      </div>
    </Layout>
  );
}
