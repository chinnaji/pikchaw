import { useState } from "react";
import Link from "next/link";
function SearchBar() {
  // store search value
  const [searchValue, setSearchValue] = useState("");

  //   handle searching
  function handleSearch(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }
  return (
    // {/* search form */}

    <form className="flex w-full flex-wrap items-center justify-center  ">
      <input
        onChange={handleSearch}
        type="text"
        className="my-2 w-full border-0 py-4 px-3 text-zinc-500 outline-none lg:my-0 lg:w-3/4"
      />
      <Link href={`/search/${searchValue}?page=1`}>
        <input
          required
          type="submit"
          value="SEARCH"
          className="w-full cursor-pointer bg-sky-500 px-5 py-4 font-semibold text-white transition-all ease-in-out hover:bg-sky-600 lg:w-1/4 lg:px-10 "
        />
      </Link>
    </form>
  );
}

export default SearchBar;
