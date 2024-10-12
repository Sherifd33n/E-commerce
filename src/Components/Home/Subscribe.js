import React from "react";
import Button from "../Button";

const Subscribe = () => {
  return (
    <div className="mt-24 text-center">
      <h2 className="text-[1.2rem] font-bold">Subscribe now and get 20% off</h2>
      <p className="text-sm">
        A town hall different from bala blu, bulaba. broom broom broom
        brooooooooom.
      </p>
      <div
        className="h-[40px] mx-auto
       border-gray-400 border mt-5 items-center flex justify-between md:w-[500px]"
      >
        <input
          type="email"
          className="h-full pl-2 w-full outline-none"
          placeholder="Enter Your Email"
        />
        <Button type="submit" title="SUBSCRIBE" />
      </div>
    </div>
  );
};

export default Subscribe;
