/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Compents/Button/Button";

function BackToHomeButton() {
  return (
    <NavLink to={-1} className="mt-10">
      <Button
        hover="hover:bg-slate-800 hover:font-bold  hover:text-slate-200  "
        color="text-slate-50 bg-slate-900 lg:max-w-[800px] w-full "
      >
        Back to Home
      </Button>
    </NavLink>
  );
}

export default BackToHomeButton;
