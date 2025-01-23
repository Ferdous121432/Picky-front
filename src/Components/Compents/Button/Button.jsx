import React from "react";

export default function Button({
  children,
  handleClick,
  color,
  hover,
  disabled,
  width,
}) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`border-0 px-8 py-4 text-xl font-semibold capitalize hover:bg-slate-200 focus:outline-none ${width ? `w-${width}` : ""} ${color ? color : ""} ${hover ? hover : ""} `}
    >
      {children}
    </button>
  );
}
