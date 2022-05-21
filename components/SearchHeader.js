import React from "react";
import ToggleImageSource from "./ToggleImageSource";

function SearchHeader({ currentSource, searchQuery }) {
  return (
    <section className="flex  mt-7 sticky top-0 bg-white z-50  flex-wrap items-center  justify-center lg:justify-between">
      <h1 className="text-xl font-light my-5  text-center w-full lg:w-fit">
        Showing results for - <u>{searchQuery}</u>
      </h1>

      <div className="w-full lg:w-fit text-center pb-2">
        <ToggleImageSource
          currentSource={currentSource}
          searchQuery={searchQuery}
        />
      </div>
    </section>
  );
}

export default SearchHeader;
