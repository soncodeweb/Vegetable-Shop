import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between  px-[25px] py-[20px] bg-[#fff] flex-col">
      <h2 className="text-[17px] font-medium">
        Please contact us using the information below
      </h2>
      <h4>
        {" "}
        <span className="font-medium text-[#2ac43e]">Email:</span>{" "}
        <a href="https://mail.google.com/mail/u/0/#inbox">
          lequangson10@gmail.com
        </a>
      </h4>
      <h4>
        {" "}
        <span className="font-medium text-[#2ac43e]">Phone number:</span>{" "}
        0345505829
      </h4>
    </div>
  );
};

export default Contact;
