"use client";
import UserList from "../../components/crud/userList";
// import UserList from "@/components/crud/userList";

UserList;

const CrudPage = () => {
  return (
    <div className="flex h-screen bg-slate-900 justify-center items-center">
      <div className="w-6/12 bg-white p-5">
        <UserList />
      </div>
    </div>
  );
};

export default CrudPage;
