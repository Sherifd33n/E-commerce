import React, { useState } from "react";
import Product from "./Product";
import { AllWear } from "../Data/Data";

const SearchProduct = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="">
      <div className="mx-auto w-full flex justify-center ">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border mt-3 border-gray-500 p-2 md:w-[500px]"
        />
      </div>

      <div>
        <div className="flex flex-wrap gap-8 flex-row justify-center mx-auto">
          {AllWear.filter((product) =>
            product.name.toLowerCase().includes(query)
          ).map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
