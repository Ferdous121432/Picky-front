/* eslint-disable */
import React from "react";

function Divider({ text }) {
  return (
    <div className="flex flex-wrap gap-6 items-center mt-8 w-full text-2xl text-stone-500">
      <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 w-[183px]" />
      <div className="self-stretch my-auto">{text}</div>
      <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 w-[183px]" />
    </div>
  );
}

export default Divider;
