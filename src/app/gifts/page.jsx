"use client";

import Container from "../../components/container";

import GifExpertApp from "./gifExpertApp";

const GifsPage = () => {
  // const category = "cats"; // Puedes hacer que esta categoría sea dinámica o basada en el input del usuario

  return (
    <div style={{ backgroundColor: "rgb(234, 234, 234)" }}>
      <Container>

        <GifExpertApp/>
  
      </Container>
    </div>
  );
};

export default GifsPage;
