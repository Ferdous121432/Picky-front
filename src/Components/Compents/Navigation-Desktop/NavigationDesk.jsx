import React, { useState } from "react";

export default function NavigationDesk() {
  const navCategories = ["sale", "Men", "Women"];
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden items-center justify-center gap-3 bg-slate-200 py-4 font-semibold uppercase text-slate-900 shadow-xl lg:flex">
        {navCategories.map((category) => (
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            key={category}
            className="px-4"
          >
            <a href="#" className="relative hover:text-slate-500">
              {category}
              <span
                style={{
                  transform: open ? "scaleX(1)" : "scaleX(0)",
                }}
                className="roundedtrue absolute -bottom-2 -left-2 -right-2 h-1 origin-left bg-slate-900 transition-transform duration-300 ease-out hover:scale-x-100"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
