import React, { Fragment } from "react";
import AllOrder from "./AllOrder";
import InforUser from "./InforUser";
import { Link, NavLink, Outlet } from "react-router-dom";
import ManageOrder from "./ManageOrder";
import { useAuth } from "../../context/authen/user/authContext";

const ContentUser = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="content-user  bg-[#f4f4f4] py-[30px] ">
        <div className="container flex ">
          <div className="content-left w-[315px] p-[20px] ">
            <div className="flex text-center justify-center">
              <img
                src="https://www.ccair.org/wp-content/plugins/phastpress/phast.php/c2Vydm/ljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LmNjYWlyLm9yZyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAxNSUyRjA0JTJGd2FsbHBhcGVyLWZvci1mYWNlYm9vay1wcm9maWxlLXBob3RvLWUxNDQwNjI0NTA1NTc0LmpwZyZjYWNoZU1hcmtlcj0xNTE3MTc3MDkwLTE2OTc4JnRva2VuPTY4NDIyY2YwN2Q4ODAxZmM.q.jpg"
                alt=""
                className="w-[45px] h-[45px] rounded-full mr-[20px] cursor-pointer"
              />
              <div className="">
                <span className="font-medium">{user.fullName}</span>
                <div className="cursor-pointer">
                  <i className="fa-solid fa-pen text-[#888] px-[5px] text-[14px]"></i>
                  <Link
                    to={"/user/my-account"}
                    className="text-[14px] text-[#888] "
                  >
                    Update Frofile
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-[20px] pl-[30px]">
                {/* <h4>Menu</h4> */}
                <NavLink
                  to={"my-account"}
                  className={({ isActive }) =>
                    isActive
                      ? "py-[2px] cursor-pointer font-semibold"
                      : "py-[2px] cursor-pointer"
                  }
                >
                  <div
                  // to={"my-account"}
                  // className="py-[2px] cursor-pointer"
                  >
                    {" "}
                    <i className="fa-thin far fa-user w-[25px] text-[16px]"></i>
                    <span className="tracking-[0.5px]">My Account</span>
                  </div>
                </NavLink>
                <NavLink
                  to={"purchare-order"}
                  // className="py-[2px] cursor-pointer"
                  className={({ isActive }) =>
                    isActive
                      ? "py-[2px] cursor-pointer font-semibold"
                      : "py-[2px] cursor-pointer"
                  }
                >
                  {" "}
                  {/* <i className="fa-solid fa-cart-shopping w-[25px] text-[16px] "></i> */}
                  <i className="fa-thin fas fa-bag-shopping w-[25px] text-[16px] "></i>
                  <span className="tracking-[0.5px]">Purchase Order</span>
                </NavLink>
                <NavLink
                  to={"notification"}
                  className={({ isActive }) =>
                    isActive
                      ? "py-[2px] cursor-pointer font-semibold"
                      : "py-[2px] cursor-pointer"
                  }
                >
                  <div className="py-[2px] cursor-pointer">
                    {" "}
                    <i className="fa-thin far fa-bell w-[25px] text-[16px]"></i>
                    <span className="tracking-[0.5px]">Notification</span>
                  </div>
                </NavLink>
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "py-[2px] cursor-pointer font-semibold"
                      : "py-[2px] cursor-pointer"
                  }
                >
                  <div className="py-[2px] cursor-pointer">
                    {" "}
                    <i className="fa-thin far fa-envelope w-[25px] text-[16px]"></i>
                    <span className="tracking-[0.5px]">Contact</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="content-right  w-full">
            {/* <InforUser></InforUser> */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentUser;
