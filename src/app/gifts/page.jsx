"use client";

import { AddCategory, GifGrid } from "@/components/gifs";
import GifExpertApp from "./gifExpertApp";

const GifsPage = () => {
  const category = "cats"; // Puedes hacer que esta categoría sea dinámica o basada en el input del usuario

  return (
    <div>
      <h1>GIFs de {category}</h1>
      <GifExpertApp></GifExpertApp>
      <GifGrid category={category} />
    </div>
  );
};

export default GifsPage;
