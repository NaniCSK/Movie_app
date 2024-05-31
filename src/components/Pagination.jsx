import React from "react";

function Pagination({ pageNo, handleNextPage, handlePrevPage }) {
  return (
    <div className="bg-gray-800 text-white p-3 m-5 flex justify-center">
      <div className="px-8" onClick={handlePrevPage}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8" onClick={handleNextPage}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;