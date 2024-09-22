"use client";

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="bg-white radius rounded border-2 border-violet-500 text-black text-lg	px-4 py-3 w-full"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
