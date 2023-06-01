import React from "react";
import Sidebar from "../Components/Sidebar";
import Usuario from "../Components/Usuario";
import RegisterUser from "../Components/RegisterUserPage";

const AdminPage = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Usuario></Usuario>
      <RegisterUser></RegisterUser>
    </div>
  );
};

export default AdminPage;
