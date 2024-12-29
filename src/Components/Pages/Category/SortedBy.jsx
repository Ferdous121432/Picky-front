import { motion } from "framer-motion";
import React from "react";

export default function SortedBy() {
  return (
    <div className="text-base text-primeColor relative flex h-[50px] w-full items-center justify-between gap-2 bg-slate-800 px-6 lg:w-[500px]">
      <p className="">Sorted By</p>
      <select className="text-base bg-slate-800 outline-none">
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
    </div>
  );
}
