import "./Login.scss";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useAuth } from "../../context/authen/user/authContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login(/*{ open = false, handleClose = () => {} }*/) {
  const [check, setCheck] = useState(null);
  const { user, login, logout } = useAuth();

  const notify = (msg) =>
    toast.error(msg, {
      position: "top-right",
      draggable: false,
      autoClose: 2000,
    });

  const schema = yup.object({
    email: yup.string().required("*Please enter your email in the field"),
    password: yup.string().required("*Please enter your password in the field"),
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
      const handleLogin = async () => {
        const result = await axios
          .post("http://localhost/food_backEnd/admin/authen/login.php", {
            email: values.email,
            password: values.password,
          })
          .catch(function (error) {
            console.log(error);
          });

        if (result?.data?.status) {
          login(result?.data?.data);
        } else {
          notify(result?.data?.msg);
        }
      };
      handleLogin();
    }
  };

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => {
      return !prev;
    });
  };

  // console.log("user");
  return (
    <div
      className="login-wrapper"
      // onClick={(e) => {
      //   setShowLogin(false);
      //   // console.log(showLogin);
      // }}
    >
      <ToastContainer />{" "}
      <Link to={"/"}>
        <img id="logo" src="image/logoMain.png"></img>
      </Link>
      <div
        className="login"
        onClick={(e) => {
          e.stopPropagation();
          // console.log(showLogin);
        }}
      >
        <div className="header">
          <h3 className="title ">FOOD SIGN IN</h3>
          <p className="content">
            Hey, Enter your details to get sign in to your account
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <input
              type="text"
              className="email-input"
              placeholder="Enter Email"
              {...register("email")}
            />
            {errors?.email ? (
              <span className="text-red-600 ml-1.5 font-medium text-sm">
                {errors.email.message}
              </span>
            ) : null}
          </div>
          <div className="password">
            <input
              type={`${show ? "text" : "password"}`}
              className="password-input"
              placeholder="Password"
              {...register("password")}
            />
            <i
              className={`fa-solid ${
                show ? "fa-eye" : "fa-eye-slash"
              } password-hide`}
              onClick={handleToggle}
            ></i>
          </div>
          {errors?.password ? (
            <span className="text-red-600 ml-1.5 font-medium text-sm">
              {errors.password.message}
            </span>
          ) : null}
          <button className="btn-signIn">Sign in</button>
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
          <span className="question">
            Don't have an account?{" "}
            <Link to="/register" className="request">
              Request Now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );

  // if (typeof document === "undefined") return <div className="login-wrapper"></div>;
  // return ReactDOM.createPortal(
  //   <div className={`login-wrapper ${open ? "" : "hidden"}`} onClick={handleClose}>
  //     <div
  //       className={`login`}
  //       onClick={(e) => {
  //         e.stopPropagation();
  //       }}
  //     >
  //       <i className="fa-solid fa-xmark close" onClick={handleClose}></i>
  //       <div className="header">
  //         <h3 className="title ">FOOD SIGN IN</h3>
  //         <p className="content">Hey, Enter your details to get sign in to your account</p>
  //       </div>
  //       <form className="form" onSubmit={handleSubmit(onSubmit)}>
  //         <div className="email">
  //           <input type="text" className="email-input" placeholder="Enter Email" {...register("email")} />
  //           {errors?.email ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.email.message}</span> : null}
  //         </div>
  //         <div className="password">
  //           <input type={`${show ? "text" : "password"}`} className="password-input" placeholder="Password" {...register("password")} />
  //           <i className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"} password-hide`} onClick={handleToggle}></i>
  //         </div>
  //         {errors?.password ? <span className="text-red-600 ml-1.5 font-medium text-sm">{errors.password.message}</span> : null}
  //         <button className="btn-signIn">Sign in</button>
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
  //         <span className="question">
  //           Don't have an account?{" "}
  //           <a href="#" className="request">
  //             Request Now
  //           </a>
  //         </span>
  //       </div>
  //     </div>
  //   </div>,
  //   document.querySelector("body")
  // );
}

export default Login;

// https://dribbble.com/shots/18063206-Login-UI
