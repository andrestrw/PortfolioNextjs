"use client";

import Container from "../../components/container";
import UserList from "../../components/crud/userList";
// import UserList from "@/components/crud/userList";

UserList;

const CrudPage = () => {
  return (
    <Container >
      <div className="w-12/12 bg-white p-5">
        <UserList />
      </div>
    </Container>
  );
};

export default CrudPage;
