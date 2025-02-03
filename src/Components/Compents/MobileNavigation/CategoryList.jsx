import React from "react";
import { motion } from "framer-motion";
import { navCategory } from "../../Utils/MobileNavAnimation";
import { animation } from "../../Utils/AnimationHooks/CategoryPageAnimation";
import { categories } from "../../../hooks/categories";

export default function CategoryList({ setCategory, setOpen }) {
  return (
    <div className="mt-4 flex w-[60%] flex-col justify-start gap-3">
      {categories.map((category) => (
        <div
          onClick={() => {
            setCategory(category.id);
            setOpen(true);
            console.log(category.id);
          }}
          className="flex items-center justify-center bg-slate-50"
          key={category.id}
          style={{
            clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
          }}
        >
          <p className="px-2 py-1 uppercase">{category.name}</p>
        </div>
      ))}
    </div>
  );
}
