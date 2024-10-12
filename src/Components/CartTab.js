import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusTab } from "../stores/cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);

  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab(false));
  };

  return (
    <div
      className={`flex fixed top-[4rem] md:top-[4.3rem] w-full md:w-[500px]  z-10 bg-gray-700 shadow-2xl h-[90vh]  p-3 justify-between transition duration-500  ${
        statusTab === false ? "-right-[100rem]" : "right-0"
      }`}
    >
      <div className=" grid grid-rows-1 ">
        <h2 className="p-5 text-white text-2xl">Shopping Carts</h2>
        <div
          style={{
            overflowY: "scroll",
            height: "65vh",
            scrollbarWidth: "none",
          }}
          className="p-5 w-full"
        >
          {carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </div>

        <div className="mt-6">
          <button
            className="bg-black text-white py-2 px-6 font-bold shadow rounded-sm hover:bg-amber-600 hover:text-white transition duration-100 lg:py-2 mr-4"
            onClick={handleCloseTabCart}
          >
            close
          </button>
          <button className="bg-amber-600 text-white py-2 px-6 font-bold shadow rounded-sm hover:bg-amber-600 hover:text-white transition duration-100 lg:py-2">
            CHECKOUT
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default CartTab;
