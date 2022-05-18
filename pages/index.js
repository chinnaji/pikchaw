import Head from "next/head";

import React from "react";
import bg from "../images/bg.jpg";
import Image from "next/image";
import Link from "next/link";
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

        <form className="flex w-full flex-wrap items-center justify-center  ">
          <input
            type="text"
            className="my-2 w-full border-0 py-4 px-3 text-zinc-500 outline-none lg:my-0 lg:w-3/4"
          />
          <input
            type="submit"
            value="SEARCH"
            className="w-full cursor-pointer bg-sky-500 px-5 py-4 font-semibold text-white transition-all ease-in-out hover:bg-sky-600 lg:w-1/4 lg:px-10 "
          />
        </form>
      </div>
    </main>
  );
}
