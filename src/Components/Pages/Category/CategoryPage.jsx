import React from "react";
import Layout from "../../Utils/Layout";
import Breadcum from "./Breadcum";
import SortedBy from "./SortedBy";
import { useQuery } from "@tanstack/react-query";

export default function CategoryPage() {
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

  return (
    <Layout>
      <div className="text-2xl font-bold text-slate-50">
        <Breadcum />
        <SortedBy />
        <div className="flex">
          <p className="w-full bg-green-800 p-10">Filter</p>
          <p className="w-full bg-slate-800 p-10">Products</p>
        </div>
      </div>
    </Layout>
  );
}
