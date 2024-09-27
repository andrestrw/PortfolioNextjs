"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import UserForm from "../../../components/crud/useForm";

const UpdateUserPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUserData();
    }
  }, [id]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.andrescd.com/api/get/${id}`
      );
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (data) => {
    try {
      await axios.put(`https://api.andrescd.com/api/update/${id}`, data);
      router.push("/crud");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 justify-center items-center">
      <div className="w-2/4 bg-white p-5">
        {userData && (
          <UserForm handleSubmit={handleSubmit} initialData={userData} />
        )}
      </div>
    </div>
  );
};

export default UpdateUserPage;
