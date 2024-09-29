import React from "react";

import Logo from "../logo.jsx";
import Navbar from "./navbar.jsx";
import Container from "../container.jsx";


import Aside from "./aside.jsx";

const Header = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between  items-center h-full">
          <Logo />
          <Navbar/>
 
        </div>
        <Aside/>
      </Container>
    </>
  );
};

export default Header;
