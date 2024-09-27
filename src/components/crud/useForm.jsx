"use client";

import { useState } from "react";

const UserForm = ({ handleSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [age, setAge] = useState(initialData.age || "");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, email, age });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-semibold text-lg ">
        {initialData ? "Update User" : "Add User"}
      </h2>
      <div className="mb-2">
        <label htmlFor="name" className="block pb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          className="border-2 p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block pb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          className="border-2 p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="age" className="block pb-2">
          Age
        </label>
        <input
          type="text"
          placeholder="Enter Age"
          className="border-2 p-2 w-full"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button className="bg-green-500 p-2 text-white">
        {initialData ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;
