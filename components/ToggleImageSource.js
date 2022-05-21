import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
function ToggleImageSource({ currentSource, searchQuery }) {
  // all available image sources
  const imageSources = ["unsplash", "pexels", "pixabay"];
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
    <section className="flex items-center justify-center">
      <Link href={`/search/${currentSource}?q=${searchQuery}&page=1`}>
        <a className=" text-sm mx-2 px-2 py-1  text-white font-medium capitalize rounded bg-sky-500 ">
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
            <a className=" text-sm mx-2 px-2 py-1  text-zinc-400 font-medium capitalize rounded border hover:bg-zinc-200">
              {source}
            </a>
          </Link>
        ))}
    </section>
  );
}

export default ToggleImageSource;
