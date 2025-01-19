// TODO: Template for Navigation-popup. Change Flyout Links according to the project requirements.

import React from "react";
import FlyoutLink from "./FlyoutLink";
import { categories } from "../../../Asset/categories";

export default function Navigation() {
  return (
    <div className="relative flex w-screen justify-center bg-slate-200 px-4 text-sm text-slate-900 shadow-xl">
      {/* <MaxWidth81> */}
      <div className="hidden w-full max-w-[81.25rem] items-center justify-between px-10 py-4 font-semibold uppercase lg:flex">
        {categories.map((category, index) => (
          <FlyoutLink
            key={index}
            link={category.url}
            flyoutContent={category.name}
            // lastChild={index === categories.length - 1}
          >
            {category.name}
          </FlyoutLink>
        ))}
      </div>
      {/* </MaxWidth81> */}
    </div>
  );
}
