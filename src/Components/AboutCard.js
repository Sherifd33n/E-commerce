import React from "react";

const AboutCard = ({ title, text }) => {
  return (
    <div className="shadow-md p-3 w-[310px]">
      <h2 className="text-[1.1rem] capitalize font-bold mb-2">{title}</h2>
      <p className="text-sm md:text-[0.93rem]">{text}</p>
    </div>
  );
};

export default AboutCard;
