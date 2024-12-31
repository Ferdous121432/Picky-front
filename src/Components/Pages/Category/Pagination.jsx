/* eslint-disable */
import React from "react";

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <nav
      className="mx-4 mb-10 mt-10 flex items-center justify-center gap-4 whitespace-nowrap pt-8 text-md text-black"
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <div className="flex w-[98px] flex-col justify-center rounded-xl font-semibold">
          <button className="rounded-xl bg-orange-50 px-2.5 py-4 max-md:px-5">
            <span className="flex items-center justify-center">Prev</span>
          </button>
        </div>
      )}
      <div className="flex w-[98px] justify-center rounded-xl font-semibold">
        {`${currentPage}/ ${totalPages}`}
      </div>
      {currentPage < totalPages && (
        <div className="flex w-[98px] flex-col rounded-xl font-semibold">
          <button className="rounded-xl bg-orange-50 px-2.5 py-4 max-md:px-5">
            <span className="flex items-center justify-center">Next</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Pagination;
