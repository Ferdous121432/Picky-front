import React from "react";

export default function AddToCard({ handleAddToCart }) {
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="cursor-default bg-slate-900 px-10 py-3 font-[800] uppercase text-slate-100"
      >
        Add to Bag
      </button>
    </div>
  );
}
