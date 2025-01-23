/* eslint-disable */
import React from "react";

const Pagination = ({ page, setPage, currentPage, totalPages }) => {
  return (
    <nav
      className="mx-4 mb-10 mt-10 flex items-center justify-center gap-4 whitespace-nowrap pt-8 text-md text-black"
      aria-label="Pagination"
    >
      <div className="flex w-[98px] flex-col justify-center rounded-xl font-semibold">
        <button
          onClick={() => (page > 1 ? setPage(page - 1) : setPage(page))}
          className={`rounded-xl px-2.5 py-4 text-slate-100 max-md:px-5 ${currentPage === 1 ? "bg-slate-400" : "bg-slate-800"} `}
          disabled={currentPage === 1}
        >
          <span className="flex items-center justify-center">Prev</span>
        </button>
      </div>

      <div className="flex w-[98px] justify-center rounded-xl text-lg font-semibold">
        {`${page} / ${totalPages}`}
      </div>

      <div className="flex w-[98px] flex-col rounded-xl font-semibold">
        <button
          onClick={() =>
            page < totalPages ? setPage(page + 1) : setPage(page)
          }
          className={`rounded-xl px-2.5 py-4 text-slate-100 max-md:px-5 ${page < totalPages ? "bg-slate-800" : "bg-slate-400"} `}
        >
          <span className="flex items-center justify-center">Next</span>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
