import React from "react";
import { useAuth } from "../../context/authen/user/authContext";

const UserDetail = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      <div className=" p-2 drop-shadow-md absolute bg-gray-300 top-[100%] left-[3px] bg-blue-600 rounded-md">
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserDetail;
