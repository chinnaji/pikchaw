import React from "react";

function Container({ children }) {
  return (
    <>
      <section className="relative px-3  mx-auto h-fit w-full max-w-[1300px]  ">
        {children}
      </section>
    </>
  );
}

export default Container;
