import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between mt-28 flex-wrap pb-4">
        <div className="w-full md:w-1/3">
          <img src={Logo} alt="logo" className="h-[33px] mb-5" />
          <p className="text-sm text-gray-500">
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba A town hall different
            from bala blu.
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="uppercase font-bold mb-4">company</p>
          <ul className="flex flex-col gap-2">
            <li className="text-sm text-gray-500 font-semibold">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="text-sm text-gray-500 font-semibold w-auto">
              <Link to="/collection" className="hover:text-gray-300">
                Collection
              </Link>
            </li>
            <li className="text-sm  text-gray-500 font-semibold">
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li className="text-sm  text-gray-500 font-semibold">
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="uppercase font-bold mb-4">get in touch</p>

          <p className="text-gray-500 font-semibold -ml-1 mb-2">+234 000 000</p>
          <p className="text-gray-500 font-semibold">sherifd33n@gmail.com</p>
        </div>
      </div>
      <p className="text-center mt-6 font-semibold border-t border-gray-500 py-2">
        sherifd33n-2024
      </p>
    </>
  );
};

export default Footer;
