import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="hidden md:flex gap-x-6 text-white fuente-general text-lg">
          <li className="">
            <Link href="#home">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="#aboutme">
              <p>About Me</p>
            </Link>
          </li>
          <li>
            <Link href="#works">
              <p>Works</p>
            </Link>
          </li>
          <li>
            <Link href="#certificates">
              <p>Certificates</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
