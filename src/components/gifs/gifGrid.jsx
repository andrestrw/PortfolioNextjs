"use client";

import UseFetchGifs from "@/hooks/useFetchGifs.js";
import { GifItem } from "@/components/gifs/index";

const GifGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifs(category);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
