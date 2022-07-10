import React, { Fragment, useState } from "react";
import { useAuth } from "../../context/authen/user/authContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const InforUser = () => {
  const { user, login, logout } = useAuth();
  const [male, setMale] = useState(user.sex);
  const navigate = useNavigate();
  const notify = (mes, mode) =>
    toast[mode](mes, {
      position: "top-right",
      draggable: false,
      autoClose: 1000,
    });

  const schema = yup.object({
    fullName: yup.string().required("*Please enter your fullname in the field"),
    email: yup
      .string()
      .email("*Must be a valid email")
      .required("*Please enter your email in the field"),
    phoneNumber: yup
      .string()
      .required("*Please enter your phone number in the field")
      .max(12, "*Please enter a phone number less than 12 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //   $user->idUser = $dataInput->idUser;
  // $user->email = $dataInput->email;
  // $user->fullName = $dataInput->fullName;
  // $user->phoneNumber = $dataInput->phoneNumber;
  // $user->sex = $dataInput->sex;
  const onSubmit = (values) => {
    const sex = male == true ? "1" : "0";
    if (isValid) {
      const callApi = async () => {
        const result = await axios({
          method: "POST",
          url: "http://localhost/food_backEnd/admin/authen/update.php",
          data: {
            idUser: user.idUser,
            fullName: values.fullName,
            sex: sex,
          },
        }).catch((error) => console.log(error));
        if (result?.data.status === 1) {
          notify(result?.data?.msg, "success");
          console.log(result?.data?.msg);
        } else {
          notify(result?.data?.error, "erros");
        }
      };
      callApi();
    }
  };

  const OnSubmitPassword = (values) => {
    if (isValid) {
      if (values.oldPassword == values.newPassword) {
        notify(
          "Please enter a new password that is different from the old password",
          "error"
        );
      } else {
        const callApi = async () => {
          const result = await axios({
            method: "POST",
            url: "http://localhost/food_backEnd/admin/authen/changePassword.php",
            data: {
              idUser: user.idUser,
              password: values.newPassword,
              oldPassword: values.oldPassword,
            },
          }).catch((error) => console.log(error));
          if (result?.data.status === 1) {
            notify(result?.data?.msg, "success");
            logout();
          } else {
            notify(result?.data?.error, "error");
          }
        };
        callApi();
      }
    }
  };

  return (
    <div className="flex justify-between  px-[25px] py-[20px] bg-[#fff]">
      <div className="w-[70%]">
        <h2 className="font-semibold text-[20px] cursor-pointer ">
          My Account
        </h2>
        <p className="py-[5px] italic font-light text-[14px]">
          Profile management information for account security
        </p>
        <span className=" border-solid border-[#efefef] w-[99%] inline-block border-[0.5px]"></span>
        <form action="" className="py-[10px]" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span className="w-[160px] inline-block text-right p-[10px] text-[#666] font-medium">
              Full name
            </span>
            <input
              type="text"
              className="border-solid border-[#eeeeee] px-[10px] py-[5px] ml-[40px] w-[300px] font-normal rounded-lg"
              defaultValue={user.fullName}
              {...register("fullName")}
            />
            {errors?.fullName ? (
              <span className="text-red-600 ml-1.5 font-medium text-sm">
                {errors.fullName.message}
              </span>
            ) : null}
          </div>
          <div>
            <span className="w-[160px] inline-block text-right p-[10px] text-[#666] font-medium">
              Email
            </span>
            <input
              type="text"
              className="border-solid border-[#eeeeee] px-[10px] py-[5px] ml-[40px] w-[300px]  rounded-lg"
              defaultValue={user.email}
              readOnly
              {...register("email")}
            />
            {errors?.email ? (
              <span className="text-red-600 ml-1.5 font-medium text-sm">
                {errors.email.message}
              </span>
            ) : null}
          </div>
          <div>
            <span className="w-[160px] inline-block text-right p-[10px] text-[#666] font-medium">
              Phone number
            </span>
            <input
              type="text"
              className="border-solid border-[#eeeeee] px-[10px] py-[5px] ml-[40px] w-[300px]  rounded-lg"
              defaultValue={user.phoneNumber}
              readOnly
              {...register("phoneNumber")}
            />
            {errors?.phoneNumber ? (
              <span className="text-red-600 ml-1.5 font-medium text-sm">
                {errors.phoneNumber.message}
              </span>
            ) : null}
          </div>
          <div className="flex">
            <span className="w-[160px] inline-block text-right p-[10px] text-[#666] font-medium">
              Sex
            </span>
            <div className=" ml-[40px] flex items-center">
              <div className="mr-[20px]">
                <span className="font-semibold">Male</span>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="inline-block mx-[10px] translate-y-[20%]"
                  checked={male}
                  // defaultValue={true}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      // setFemale(false);
                      setMale(true);
                    } else {
                      // setFemale(true);
                      setMale(false);
                    }
                  }}
                  readOnly
                />
              </div>
              <div>
                <span className="font-semibold">Female</span>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="inline-block mx-[10px] translate-y-[20%]"
                  readOnly={true}
                  checked={!male}
                  // {...register("female")}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      // setFemale(false);
                      setMale(false);
                    } else {
                      // setFemale(true);
                      setMale(true);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[20px]">
            <button className=" px-[50px] py-[8px] bg-[#222] text-[#fff] font-medium rounded-lg hover:bg-[#28a745] transition">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="w-[30%] border-solid border-l-[1px] ml-[20px] ">
        <form
          className="flex text-center justify-center flex-col h-[230px]"
          onSubmit={handleSubmit(OnSubmitPassword)}
        >
          <div className="w-full flex flex-col justify-center">
            <div>
              <span className="py-[5px] font-medium">Old Password</span>
              <input
                type="password"
                className="border-solid border-[#eeeeee] px-[10px] py-[5px] ml-[40px] w-[150px]  rounded-lg"
                {...register("oldPassword")}
              />
            </div>
            <div className="mt-[10px]">
              <span className="py-[5px] font-medium">New Password</span>
              <input
                type="password"
                className="border-solid border-[#eeeeee] px-[10px] py-[5px] ml-[40px] w-[150px]  rounded-lg"
                {...register("newPassword")}
              />
            </div>
          </div>
          <div className="py-[20px]">
            <div className="cursor-pointer flex text-center justify-center">
              {/* <span className="text-[14px] text-[#888] ">Select picture</span> */}
              <button className="py-[8px] px-[10px] bg-[#222] rounded-md text-[#fff] font-medium translate-x-[22px]">
                Change password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InforUser;
