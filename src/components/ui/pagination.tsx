"use client"

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

interface PageTypes {
  currentPage : number
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({currentPage, setCurrentPage}:PageTypes) => {
  const totalPages = 6;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-1 px-3 py-1 text-[0.9rem] sm:text-[1rem] rounded-full transform transition-all duration-300 ${
            currentPage === i
              ? "bg-[#00b8d9] text-white scale-110 shadow-md"
              : "bg-transparent text-blue-600 hover:bg-blue-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center flex-wrap justify-center mt-8 space-x-1 sm:space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="mx-1 px-2.5 py-2.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <ArrowLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="mx-1 px-2.5 py-2.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
