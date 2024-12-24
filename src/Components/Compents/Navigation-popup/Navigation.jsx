// TODO: Template for Navigation-popup. Change Flyout Links according to the project requirements.

import React from "react";
import FlyoutLink from "./FlyoutLink";
import MaxWidth81 from "../../Utils/MaxWidth81";

export default function Navigation() {
  return (
    <div className="flex w-screen justify-center bg-slate-200">
      <MaxWidth81>
        <div className="relative hidden items-center justify-between py-4 font-semibold uppercase text-slate-900 shadow-xl lg:flex">
          <FlyoutLink link="#" flyoutContent="sale">
            SALE
          </FlyoutLink>
          <FlyoutLink link="#" flyoutContent="men">
            MEN
          </FlyoutLink>
          <FlyoutLink link="#" flyoutContent="women">
            WOMEN
          </FlyoutLink>
          <FlyoutLink link="#" flyoutContent="kids">
            KIDS
          </FlyoutLink>
          <FlyoutLink link="#" flyoutContent="newborn">
            NEWBORN
          </FlyoutLink>
          <FlyoutLink link="#" flyoutContent="accessories">
            ACCESSORIES
          </FlyoutLink>
          <FlyoutLink link="#" flyoutContent="footwear" lastChild={true}>
            FOOTWEAR
          </FlyoutLink>
        </div>
      </MaxWidth81>
    </div>
  );
}
