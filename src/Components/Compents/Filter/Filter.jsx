import React, { useState } from "react";
import FilterName from "./FilterName";
import FilterOptions from "./FilterOptions";
import { set } from "react-hook-form";
import SortedBy from "./SortedBy";

const colors = [
  "black",
  "white",
  "blue",
  "green",
  "yellow",
  "red",
  "pink",
  "purple",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function Filter() {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <p className="text-xl uppercase">Filter By:</p>
      <div>
        <FilterOptions name="colors" options={colors} />
        <FilterOptions name="sizes" options={sizes} />
      </div>
      <div>
        <p className="text-xl uppercase">Sorted By:</p>
        <SortedBy />
      </div>
    </div>
  );
}
