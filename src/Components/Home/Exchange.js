import React from "react";
import first from "../../../src/assets/exchange_icon.png";
import second from "../../../src/assets/quality_icon.png";
import third from "../../../src/assets/support_img.png";

const Exchange = () => {
  return (
    <div className="flex items-center text-center flex-col justify-center gap-12 mt-28 md:flex-row md:flex-wrap lg:justify-between">
      <div className="">
        <img src={first} className="mx-auto" alt="" />
        <h2 className="font-semibold text-[1.2rem] capitalize">
          easy exchange policy
        </h2>
        <p className="text-[1rem]">We offer smooth free exchange policy</p>
      </div>

      <div className="">
        <img src={second} className="mx-auto" alt="" />
        <h2 className="font-semibold text-[1.2rem] capitalize">
          7 days return policy
        </h2>
        <p className="text-[1rem]">We provide 7 days free return policy</p>
      </div>

      <div className="">
        <img src={third} className="mx-auto" alt="" />
        <h2 className="font-semibold text-[1.2rem] capitalize">
          best customer support
        </h2>
        <p className="text-[1rem]">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Exchange;
