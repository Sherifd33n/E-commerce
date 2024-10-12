import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div className="mt-10 border p-3 rounded-md w-[350px] md:w-[300px] lg:w-[230px]">
        <Link to={`/product/${product?.name}`}>
          <img
            src={`/images/clothes/${product?.image}`}
            alt={product?.name}
            className="rounded-md h-[370px] md:h-[300px] lg:h-[220px] lg:w-[200px] w-full hover:scale-105 transition duration-150"
          />
          <h2 className="text-[1rem] font-semibold truncate my-4">
            {product?.name}
          </h2>

          <p className="font-bold text-lg">{`$${product?.price}`}</p>
        </Link>
      </div>
    </>
  );
};

export default Product;
