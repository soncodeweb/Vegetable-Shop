import "./Register.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import handleDate from "./handle/date";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register(/*{ open = true, handleClose = () => {} }*/) {
  const navigate = useNavigate();
  const notify = (mes, type) =>
    toast[type](mes, {
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
      .max(11, "*Please enter a phone number less than 11 characters")
      .min(10, "*Please enter a phone number mush than 10 characters"),
    password: yup.string().required("*Please enter your password in the field"),
    rePassword: yup
      .string()
      .required("*Please enter your re-pasword in the field")
      .oneOf([yup.ref("password")], "*Password's not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (values) => {
    if (isValid) {
      const callApi = async () => {
        const result = await axios({
          method: "POST",
          url: "http://localhost/food_backEnd/admin/authen/register.php",
          data: {
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
          },
        }).catch((error) => console.log(error));
        if (result?.data.status === 1) {
          notify(result?.data?.msg, "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          notify(result?.data?.error, "error");
        }
      };
      callApi();
    }
  };
  return (
    <div className={`register-wrapper `}>
      <ToastContainer />
      <Link to={"/"}>
        <img id="logo" src="image/logoMain.png"></img>
      </Link>
      <div className="register">
        <div className="header">
          <h3 className="title ">SIGN UP</h3>
          <p className="content">
            Hey, Enter your details to register your account
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="fullname input-data">
            <i className="fa-solid fa-user icon"></i>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="fullname-input data"
              placeholder="Enter Fullname"
              {...register("fullName")}
            />
          </div>
          {errors?.fullName ? (
            <span className="text-red-600 ml-1.5 font-medium text-sm">
              {errors.fullName.message}
            </span>
          ) : null}
          <div className="email input-data">
            <i className="fa-solid fa-envelope icon"></i>
            <input
              type="text"
              name="email"
              id="email"
              className="email-input data"
              placeholder="Enter Email"
              {...register("email")}
            />
          </div>
          {errors?.email ? (
            <span className="text-red-600 ml-1.5 font-medium text-sm">
              {errors.email.message}
            </span>
          ) : null}
          <div className="phoneNumber input-data">
            <i className="fa-solid fa-phone icon"></i>
            <input
              type="text"
              className="phoneNumber-input data"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              {...register("phoneNumber")}
            />
          </div>
          {errors?.phoneNumber ? (
            <span className="text-red-600 ml-1.5 font-medium text-sm">
              {errors.phoneNumber.message}
            </span>
          ) : null}
          <div className="password input-data">
            <i className="fa-solid fa-key icon"></i>
            <input
              type="password"
              className="password-input data"
              name="password"
              id="password"
              placeholder="Enter Password"
              {...register("password")}
            />
          </div>
          {errors?.password ? (
            <span className="text-red-600 ml-1.5 font-medium text-sm">
              {errors.password.message}
            </span>
          ) : null}
          <div className="re-password input-data">
            <i className="fa-solid fa-repeat icon"></i>
            <input
              type="password"
              className="re-password-input data"
              name="rePassword"
              id="rePassword"
              placeholder="Re-Enter Password"
              {...register("rePassword")}
            />
          </div>
          {errors?.rePassword ? (
            <span className="text-red-600 ml-1.5 font-medium text-sm">
              {errors.rePassword.message}
            </span>
          ) : null}

          <button className="btn-signIn">Sign up</button>
        </form>
        <div className="footer">
          <span className="title">-- Or Sign in with --</span>
          <div className="list">
            <div className="item">
              <i className="fa-brands fa-google icon"></i>
              <span className="title-icon">Google</span>
            </div>
            <div className="item">
              <i className="fa-brands fa-facebook icon"></i>
              <span className="title-icon">Facebook</span>
            </div>
            <div className="item">
              <i className="fa-brands fa-instagram-square icon"></i>
              <span className="title-icon">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // if (typeof document === "undefined") return <div className="register-wrapper"></div>;
  // return ReactDOM.createPortal(
  //   <div className={`register-wrapper ${open ? "" : "hidden"}`} onClick={handleClose}>
  //     <div
  //       className="register"
  //       onClick={(e) => {
  //         e.stopPropagation();
  //       }}
  //     >
  //       <i className="fa-solid fa-xmark close" onClick={handleClose}></i>
  //       <div className="header">
  //         <h3 className="title ">SIGN UP</h3>
  //         <p className="content">Hey, Enter your details to register your account</p>
  //       </div>
  //       <form className="form" onSubmit={handleSubmit(onSubmit)}>
  //         <div className="fullname input-data">
  //           <i className="fa-solid fa-user icon"></i>
  //           <input type="text" name="fullName" id="fullName" className="fullname-input data" placeholder="Enter Fullname" {...register("fullName")} />
  //         </div>
  //         {errors?.fullName ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.fullName.message}</span> : null}
  //         <div className="email input-data">
  //           <i className="fa-solid fa-envelope icon"></i>
  //           <input type="text" name="email" id="email" className="email-input data" placeholder="Enter Email" {...register("email")} />
  //         </div>
  //         {errors?.email ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.email.message}</span> : null}
  //         <div className="phoneNumber input-data">
  //           <i className="fa-solid fa-phone icon"></i>
  //           <input
  //             type="text"
  //             className="phoneNumber-input data"
  //             name="phoneNumber"
  //             id="phoneNumber"
  //             placeholder="Enter Phone Number"
  //             {...register("phoneNumber")}
  //           />
  //         </div>
  //         {errors?.phoneNumber ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.phoneNumber.message}</span> : null}
  //         <div className="password input-data">
  //           <i className="fa-solid fa-key icon"></i>
  //           <input
  //             type="password"
  //             className="password-input data"
  //             name="password"
  //             id="password"
  //             placeholder="Enter Password"
  //             {...register("password")}
  //           />
  //         </div>
  //         {errors?.password ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.password.message}</span> : null}
  //         <div className="re-password input-data">
  //           <i className="fa-solid fa-repeat icon"></i>
  //           <input
  //             type="password"
  //             className="re-password-input data"
  //             name="rePassword"
  //             id="rePassword"
  //             placeholder="Re-Enter Password"
  //             {...register("rePassword")}
  //           />
  //         </div>
  //         {errors?.rePassword ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.rePassword.message}</span> : null}

  //         <button className="btn-signIn">Sign up</button>
  //       </form>
  //       <div className="footer">
  //         <span className="title">-- Or Sign in with --</span>
  //         <div className="list">
  //           <div className="item">
  //             <i className="fa-brands fa-google icon"></i>
  //             <span className="title-icon">Google</span>
  //           </div>
  //           <div className="item">
  //             <i className="fa-brands fa-facebook icon"></i>
  //             <span className="title-icon">Facebook</span>
  //           </div>
  //           <div className="item">
  //             <i className="fa-brands fa-instagram-square icon"></i>
  //             <span className="title-icon">Instagram</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>,
  //   document.querySelector("body")
  // );
}

export default Register;
// https://dribbble.com/shots/18063206-Login-UI
