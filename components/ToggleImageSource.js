import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
function ToggleImageSource({ currentSource, searchQuery }) {
  // all available image sources
  const imageSources = ["unsplash", "pexels"];
  //   storage for remaining sources after filtering
  const [otherSources, setOtherSources] = useState("");
  useEffect(() => {
    //   filter images sources by current image source
    const others = imageSources.filter(
      (imageSource) => imageSource !== currentSource
    );
    setOtherSources(others);
  }, [currentSource, searchQuery]);
  return (
    <section className="pl-3">
      <div className=" relative inline-block text-left dropdown z-30 capitalize">
        <span className="rounded-md shadow-sm">
          <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
            <span className="capitalize"> {currentSource}</span>
            <FiChevronDown className="w-5 h-5 ml-2 -mr-1" />
          </button>
        </span>
        <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right scale-95">
          <div className="absolute -right-28 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-gray-100 rounded-md shadow-lg outline-none">
            <div className="py-1">
              {/* show current image source as first item in dropdown */}
              <Link href={`/search/${currentSource}?q=${searchQuery}&page=1`}>
                <a className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
                  {currentSource}
                </a>
              </Link>
              {/* map over remaining sources and display */}
              {otherSources &&
                otherSources.map((source) => (
                  <Link
                    key={Math.random()}
                    href={`/search/${source}?q=${searchQuery}&page=1`}
                  >
                    <a className="border-t hover:bg-zinc-100 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
                      {source}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToggleImageSource;
