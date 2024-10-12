import React from "react";

const Button = ({ title, type, onClick }) => {
  return (
    <button
      type={type}
      className="bg-gray-900 text-gray-300 py-2 px-6 font-bold shadow rounded-sm hover:text-gray-900 hover:bg-gray-300 transition duration-100 lg:py-2"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
