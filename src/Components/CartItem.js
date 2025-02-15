import React, { useState, useEffect } from "react";
import { AllWear } from "../Data/Data";
import { changeQuantity } from "../stores/cart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = AllWear.filter((product) => product.id === productId)[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700  gap-5 rounded-md">
      <img
        src={`/images/clothes/${detail?.image}`}
        alt=""
        className="w-12  h-full bg-red-500"
      />
      <h3 className="text-[12px] truncate">{detail.name}</h3>
      <p className="font-semibold">${detail.price * quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-black font-bold"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-black font-bold"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
