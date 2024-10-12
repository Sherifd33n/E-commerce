import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../../stores/cart";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const hover = "hover:border-b-2 hover:border-black border-none";
  const Hover = ({ isActive }) =>
    isActive ? "border-b-2 border-black" : hover;
  return (
    <>
      <div className="flex items-center z-30 py-4 justify-between sticky top-0 w-full bg-white shadow-lg ">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" className="h-[30px] md:h-[37px]" />
          </NavLink>
        </div>
        <div className="gap-8 text-sm font-semibold hidden md:flex">
          <NavLink to="/" className={Hover}>
            HOME
          </NavLink>
          <NavLink to="/collection" className={Hover}>
            COLLECTION
          </NavLink>
          <NavLink to="/about" className={Hover}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" className={Hover}>
            CONTACT
          </NavLink>
        </div>
        <div
          className={`px-0 fixed  flex flex-col py-10 h-screen mx-auto   bg-gray-400 w-full -ml-4 text-center md:hidden ${
            isNavShowing ? "top-16" : "-top-[100%]"
          }`}
        >
          <div className="gap-8 flex items-center justify-center flex-col text-sm font-semibold ">
            <NavLink
              to="/"
              onClick={() => setIsNavShowing(!isNavShowing)}
              className="hover:text-gray-400 transition duration-100"
            >
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              onClick={() => setIsNavShowing(!isNavShowing)}
              className="hover:text-gray-400 transition duration-100"
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsNavShowing(!isNavShowing)}
              className="hover:text-gray-400 transition duration-100"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsNavShowing(!isNavShowing)}
              className="hover:text-gray-400 transition duration-100"
            >
              CONTACT
            </NavLink>
          </div>

          <div className="flex gap-8 text-xl items-center mx-auto mt-10 justify-center">
            <NavLink
              to="/search"
              className="hover:text-gray-400 transition duration-100"
              onClick={() => setIsNavShowing(!isNavShowing)}
            >
              <FiSearch className="h-7 w-7" />
            </NavLink>
            <NavLink
              to="/login"
              className="hover:text-gray-400 transition duration-100"
              onClick={() => setIsNavShowing(!isNavShowing)}
            >
              <FaRegUser className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
        <div className="md:flex gap-8 text-xl items-center hidden">
          <NavLink
            to="/search"
            className="hover:text-gray-400 transition duration-100"
          >
            <FiSearch className="h-6 w-6" />
          </NavLink>
          <NavLink
            to="/login"
            className="hover:text-gray-400 transition duration-100"
          >
            <FaRegUser className="h-5 w-5" />
          </NavLink>

          <button className="hover:text-gray-400 transition duration-100 relative">
            <PiBagSimpleBold className="h-6 w-6" onClick={handleOpenTabCart} />
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
              {totalQuantity}
            </span>
          </button>
        </div>{" "}
        <button className="hover:text-gray-400 transition relative duration-100 block md:hidden -ml-16 ">
          <PiBagSimpleBold className="h-7 w-7" onClick={handleOpenTabCart} />
          <span className="absolute md:hidden top-2/3 -right-[20%] bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {totalQuantity}
          </span>
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? (
            <IoClose className="h-8 w-8 cursor-pointer hover:text-gray-500" />
          ) : (
            <IoMenu className="h-8 w-8 cursor-pointer hover:text-gray-500" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
