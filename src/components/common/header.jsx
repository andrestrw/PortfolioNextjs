import React from "react";

import Logo from "../logo.jsx";
import Navbar from "./navbar.jsx";
import Container from "../container.jsx";

import Button from "../button.jsx";
import Aside from "./aside.jsx";

const Header = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between  items-center h-full">
          <Logo />
          <Navbar></Navbar>
          <Button />
        </div>
        <Aside></Aside>
      </Container>
    </>
  );
};

export default Header;
