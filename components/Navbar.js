import React from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Container from "../components/Container";
function Navbar() {
  return (
    //   persistent page navigation bar
    <header className="shadow-xs  top-0 z-50 h-16 w-full  border-b bg-white py-2 text-zinc-800">
      <Container>
        <nav className=" mx-auto flex  items-center justify-between  lg:px-0 ">
          {/* pikchaw logo ... links to homepage */}
          <Link href="/" passHref>
            <div className="flex cursor-pointer items-center">
              <a className="relative  block h-10 w-12 cursor-pointer md:mr-0 md:w-20">
                <Image
                  src={logo}
                  layout="fill"
                  alt="logo"
                  priority
                  loading="eager"
                />
              </a>
              <span className="text-base font-bold md:text-xl">PIKCHAW</span>
            </div>
          </Link>

          {/* github icon ... links to repository page */}
          <a href="https://github.com/chinnaji/pikchaw">
            <FaGithub className="ml-4 mr-1 cursor-pointer text-3xl " />
          </a>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
