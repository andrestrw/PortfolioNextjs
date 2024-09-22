"use client";

// import UseFetchGifs from "@/hooks/useFetchGifs.js";
// import { GifItem } from "@/components/gifs/index";

import UseFetchGifs from "../../hooks/useFetchGifs";
import GifItem from "../../components/gifs/giftItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifs(category);
  const imageStyle = {};
  return (
    <>
      {/* {isLoading && <h2>Cargando...</h2>} */}
      <h3
        style={{
          fontSize: "3rem",
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
