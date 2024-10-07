"use client ";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://api.andrescd.com/api");
      setUsers(response.data); // Actualiza el estado con los datos obtenidos
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.andrescd.com/api/deleteuser/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Link href="/crud/create" className="bg-green-500 p-2 text-white">
        Add User
      </Link>
      <table className="table-fixed w-full mt-3">
        <thead>
          <tr className="border-b">
            <th className="py-3">Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">Age</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr  className="h-24" key={user._id}>
              <td className="text-center  py-3">{user.name}</td>
              <td className="text-center h-24 py-3  flex justify-center items-center "> <span className="whitespace-nowrap overflow-hidden text-ellipsis" >{user.email}</span> </td>
              <td className="text-center py-3">{user.age}</td>
              <td className="text-center py-3">
                <Link
                  href={`/crud/${user._id}`}
                  className="bg-blue-500 p-2 text-white"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 p-2 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
