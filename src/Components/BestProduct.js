import React from "react";
import { AllWear } from "../Data/Data";
import Product from "./Product";

const BestProduct = () => {
  return (
    <div className="flex flex-wrap  gap-10  justify-center mx-auto">
      {AllWear.slice(8, 12).map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default BestProduct;
