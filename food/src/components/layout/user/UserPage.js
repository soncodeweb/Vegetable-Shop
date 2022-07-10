import React, { Fragment } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ContentUser from "./ContentUser";
import { ToastContainer, toast } from "react-toastify";

const UserPage = () => {
  return (
    <>
      <ToastContainer />
      <Header></Header>
      <ContentUser></ContentUser>
      <Footer></Footer>
    </>
  );
};

export default UserPage;
