import React from "react";

export default function FilterName({ name, filterOpen, setFilterOpen }) {
  return (
    <div
      onClick={() => setFilterOpen(!filterOpen)}
      className="my-6 flex w-full cursor-pointer items-center justify-between text-xl"
    >
      <p className="font-normal">{name}</p>
      <span>{filterOpen ? "-" : "+"}</span>
    </div>
  );
}
