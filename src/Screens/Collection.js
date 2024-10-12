import React, { useState } from "react";
import Layout from "../Layout/Layout";
import SectionHead from "../Components/SectionHead";
import { AllWear } from "../Data/Data";
import Product from "../Components/Product";
import Button from "../Components/Button";

const Collection = () => {
  const [filter, setFilter] = useState("all");
  const handleClick = (category) => {
    setFilter(category);
  };

  const filteredProducts =
    filter === "all"
      ? AllWear
      : AllWear.filter((item) => item.category === filter);

  return (
    <>
      <Layout>
        <div className="flex flex-col mt-5 ">
          <div className=" w-full ">
            <div className="flex  fixed z-10 flex-wrap gap-2">
              <Button
                onClick={() => handleClick("all")}
                title="All"
                type="button"
              />

              <Button
                onClick={() => handleClick("men")}
                title="Men"
                type="button"
              />

              <Button
                onClick={() => handleClick("women")}
                title="Women"
                type="button"
              />

              <Button
                onClick={() => handleClick("kids")}
                title="Kids"
                type="button"
              />
            </div>
          </div>
          <div className="mt-28">
            <SectionHead title="all collections" />
            <div className="flex flex-wrap gap-10 justify-center mx-auto mt-5">
              {filteredProducts.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Collection;
