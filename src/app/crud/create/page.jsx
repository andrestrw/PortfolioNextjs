"use client";

// import UserForm from "@/components/crud/useForm";
import UserForm from "../../../components/crud/useForm";
import axios from "axios";
import { useRouter } from "next/navigation";
UserForm;

const CreateUserPage = () => {
  const router = useRouter();

  const handleSubmit = async (data) => {
    try {
      await axios.post("https://api.andrescd.com/api/create/", data);
      router.push("/crud");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 justify-center items-center">
      <div className="w-2/4 bg-white p-5">
        <UserForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateUserPage;
