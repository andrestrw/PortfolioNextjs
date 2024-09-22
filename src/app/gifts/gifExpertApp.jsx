"use client";

import { useState } from "react";
import GifGrid from "../../components/gifs/gifGrid";
import AddCategory from "../../components/gifs/addCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
