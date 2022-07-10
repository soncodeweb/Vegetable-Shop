import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AllOrder from "./AllOrder";
import Product from "./ProductOrder";

const ManageOrder = () => {
  return (
    <>
      <div className="content-order rounded-[2px]">
        <nav className="w-full bg-[#fff] border-solid border-b-[2px] border-gray-300 drop-shadow-md rounded-[2px]">
          <ul className="flex justify-between ">
            <NavLink
              to={"/user/purchare-order/"}
              // className="w-[70%]  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]  "
              className={({ isActive }) =>
                isActive
                  ? "w-[70%]  py-[10px] text-center cursor-pointer text-[#28a745] font-medium text-[#333]"
                  : "w-[70%]  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              }
            >
              <li>All</li>
            </NavLink>
            <NavLink
              to={"/user/purchare-order/confimation"}
              // className="w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              className={({ isActive }) =>
                isActive
                  ? "w-full  py-[10px] text-center cursor-pointer text-[#28a745] font-medium text-[#333]"
                  : "w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              }
            >
              <li>Wait for confirmation</li>
            </NavLink>

            <NavLink
              to={"/user/purchare-order/delivering"}
              // className="w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              className={({ isActive }) =>
                isActive
                  ? "w-full  py-[10px] text-center cursor-pointer text-[#28a745] font-medium text-[#333]"
                  : "w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              }
            >
              <li>Delivering</li>
            </NavLink>
            <NavLink
              to={"/user/purchare-order/delivered"}
              // className="w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              className={({ isActive }) =>
                isActive
                  ? "w-full  py-[10px] text-center cursor-pointer text-[#28a745] font-medium text-[#333]"
                  : "w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              }
            >
              <li>Delivered</li>
            </NavLink>
            <NavLink
              to={"/user/purchare-order/cancelled"}
              // className="w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              className={({ isActive }) =>
                isActive
                  ? "w-full  py-[10px] text-center cursor-pointer text-[#28a745] font-medium text-[#333]"
                  : "w-full  py-[10px] text-center cursor-pointer hover:text-[#28a745] font-medium text-[#333]"
              }
            >
              <li>Cancelled</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default ManageOrder;
