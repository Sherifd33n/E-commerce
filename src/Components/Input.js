import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <div className="">
      <input
        type={type}
        className="rounded-md w-full border p-2 outline-none md:w-[500px] my-2 h-[40px]"
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
