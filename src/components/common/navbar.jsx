"use client"

import Link from "next/link";
import { useState } from "react";
import Button from "../button";




const Navbar = () => {


const [isOpen, setIsOpen] = useState(false)

// Función para alternar el estado del menñu en pantallas móviles

const toggleMenu = () => {
  setIsOpen(!isOpen);
};


  return (
    <>
      <nav className="absolute  top-8 right-8 md:static    " >
      <Button onClick={toggleMenu}  isOpen={isOpen}/>
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
        {/* Menú en pantallas pequeñas, se muestra solo cuando isOpen es true */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden flex flex-col gap-y-4 mt-4 bg-white text-black text-lg text-left p-3 `}
        >
          <li>
            <Link href="#home" onClick={toggleMenu}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="#aboutme" onClick={toggleMenu}>
              <p>About Me</p>
            </Link>
          </li>
          <li>
            <Link href="#works" onClick={toggleMenu}>
              <p>Works</p>
            </Link>
          </li>
          {/* <li>
            <Link href="#certificates" onClick={toggleMenu}>
              <p>Certificates</p>
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
