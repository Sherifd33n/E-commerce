import React from "react";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const { id } = product;

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <div className="lg:flex lg:justify-between gap-5 mt-5">
        <div className="lg:w-[40%]">
          <Link onClick={() => navigate(-1)}>
            <IoArrowBack className="bg-gray-700 text-5xl text-white p-3 rounded-full absolute" />
          </Link>
          <img
            src={`/images/clothes/${product?.image}`}
            alt={product?.name}
            className="w-full lg:h-[400px] md:h-[400px] md:w-[400px] lg:w-[400px] "
          />
        </div>

        <div className="lg:w-[60%]">
          <div className="mt-5">
            <h1 className="text-xl font-bold lg:text-2xl">{product?.name}</h1>
            <p className="text-3xl font-bold my-4 lg:text-4xl">
              ${product?.price}
            </p>
            <p className=" text-gray-500 md:pr-20 lg:w-[90%]">{product.desc}</p>
          </div>

          <select className="my-4 bg-gray-200 p-1 lg:p-2">
            <option value="">Default Size</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
          </select>
          <br />
          <Button
            type="submit"
            title="ADD TO CART"
            className=""
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
