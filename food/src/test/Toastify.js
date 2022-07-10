import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const array = [1, 2, 4, 5, 6, 7, 8];
  return (
    <div>
      {array.map((item, index) => (
        <Abc key={index} id={index}></Abc>
      ))}
    </div>
  );
};
const Abc = ({ id }) => {
  const [data, setData] = useState();
  console.log("data", data);
  const notify = () =>
    toast("Bạn đã thêm thành công!", {
      position: "bottom-right",
      //   draggable: true,
      autoClose: 500,
    });
  setInterval(() => setData(1), 1000);
  return (
    <div>
      {/* <ToastContainer /> */}
      <button className="m-[10px] px-[20px] py-[5px] bg-red-400" onClick={notify}>
        Button{id}{" "}
      </button>
    </div>
  );
};

export default Toastify;
