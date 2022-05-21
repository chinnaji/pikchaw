import React from "react";

function Container({ children }) {
  return (
    <>
      <section className="relative  mx-auto h-fit w-full max-w-[1200px]  ">
        {children}
      </section>
    </>
  );
}

export default Container;
