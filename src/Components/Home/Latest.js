import React from "react";
import heroImg from "../../assets/hero_img.png";

const Latest = () => {
  return (
    <div className="flex flex-col justify-between items-center border md:flex-row border-gray-500 ">
      <div className="mx-auto my-20">
        <p className="flex items-center gap-2 text-xl uppercase font-semibold">
          <span className="bg-black h-[1.5px] w-10 block"></span>our best
          sellers
        </p>

        <p className=" capitalize text-5xl font-serif">latest arrivals</p>

        <p className="flex items-center gap-2 text-xl uppercase font-semibold">
          shop now
          <span className="bg-black h-[1.5px] w-10 block"></span>
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={heroImg}
          alt=""
          className="h-full md:h-[350px]  lg:h-[450px] w-full"
        />
      </div>
    </div>
  );
};

export default Latest;
