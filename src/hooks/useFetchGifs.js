import { GetGifs } from "../helpers/getGifs";
//<-- Custom hook para la lógica de obtención de GIFs

import { useState, useEffect } from "react";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await GetGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
