"use client";


import UseFetchGifs from "../../hooks/useFetchGifs";
import GifItem from "../../components/gifs/giftItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifs(category);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}

      <div className="font-bold text-2xl pt-3 " >Escribe dentro de nuestro buscador y te traeremos 4 gifts!</div>
      <h3
        style={{
          fontSize: "2rem",
          marginBotton: "5px",
        }}
      >
        {category}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}

      >
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
