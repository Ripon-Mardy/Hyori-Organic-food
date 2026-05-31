import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Previous */}
      <button
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        disabled={currentPage === 1}
        className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-400 bg-white text-gray-600 hover:bg-green-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        &lt;
      </button>

      {/* Pages */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="h-10 w-10 flex items-center justify-center text-gray-500"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(Number(page))}
            className={`h-10 min-w-10 px-3 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
              currentPage === page
                ? "bg-green-600 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-600 hover:text-green-600"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        disabled={currentPage === totalPages}
        className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-green-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
