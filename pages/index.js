import Head from "next/head";

import React from "react";
import bg from "../images/bg.jpg";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
export default function Home() {
  return (
    <main className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center px-5 lg:px-0">
      <Image
        src={bg}
        layout="fill"
        className="z-10"
        alt="logo"
        objectFit="cover"
        priority
        loading="eager"
      />

      <span className=" absolute z-20 h-full w-full bg-[#00000062]"></span>
      <div className="content z-30 max-w-[600px]  text-center text-white ">
        <h1 className="my-2 px-5 text-3xl font-bold leading-normal md:text-4xl lg:text-5xl">
          A middleground for your next inspiration
        </h1>
        <p className="mx-auto mb-10 mt-5 max-w-[500px]">
          Get images from the best sources in one place.
        </p>
        {/* search component */}
        <SearchBar />
      </div>
    </main>
  );
}
