import React, { useState, useEffect } from "react";
import Link from "next/link";
function Pagination({ total_pages, currentPage, imageSource, searchQuery }) {
  const items = new Array(total_pages).fill(1);
  // starting point for slicing pagination
  const [start, setStart] = useState(1);
  // finish point for slicing pagination
  const [end, setSearchEnd] = useState(4);
  useEffect(() => {
    setStart(currentPage - 1);
    setSearchEnd(+currentPage + 3);
  }, []);
  return (
    <div className="flex border-t pt-5 flex-wrap justify-center my-10 text-sm md:text-base">
      {/* navigate to previous page */}
      <Link
        href={`/search/${imageSource}?q=${searchQuery}&page=${currentPage - 1}`}
      >
        <a className="border  px-2 py-2 hover:bg-zinc-200">Prev</a>
      </Link>
      {/* {total_pages}-{currentPage} */}
      {items.slice(start, end).map((item, index) => (
        <Link
          href={`/search/${imageSource}?q=${searchQuery}&page=${
            index + +currentPage
          }`}
        >
          <a
            className={
              currentPage == index + +currentPage
                ? "border  px-4 py-2 text-white font-medium bg-sky-500 "
                : "border  px-4 py-2 hover:bg-zinc-200"
            }
          >
            {index + +currentPage}
          </a>
        </Link>
      ))}

      {/* navigate to next page */}
      <Link
        href={`/search/${imageSource}?q=${searchQuery}&page=${
          +currentPage + 1
        }`}
      >
        <a className="border  px-2 py-2 hover:bg-zinc-200">Next</a>
      </Link>
    </div>
  );
}

export default Pagination;
