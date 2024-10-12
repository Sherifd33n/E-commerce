import React from "react";

const SectionHead = ({ title, titleDesc }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-2xl uppercase font-semibold ">{title}</h3>{" "}
        <span className="bg-black h-[1.5px] w-10 block"></span>
      </div>

      <p className="text-md my-2 md:px-[10%] lg:px-[24%]">{titleDesc}</p>
    </div>
  );
};

export default SectionHead;
