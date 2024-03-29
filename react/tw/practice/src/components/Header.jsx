import React from "react";
import { IoIosMore } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex h-screen bg-slate-400 ">
      <div className="flex h-20 w-full bg-slate-200 rounded-2xl justify-evenly py-4">
        <div className="flex items-center text-xl text-blue-500 font-semibold">
          Tweetos
        </div>
        <div className="hidden xs:flex items-center">
          <IoIosMore className="text-2xl" />
        </div>

        <div className="flex w-4/6 items-center xs:hidden">
          <div className="w-1/4 justify-center items-center flex hover:text-white hover:px-4 hover:py-2 hover:bg-blue-400 hover:rounded-full active:bg-slate-500 cursor-pointer">
            Home
          </div>
          <div className="w-1/4  justify-center items-center flex  hover:text-white hover:px-4 hover:py-2 hover:bg-blue-400 hover:rounded-full active:bg-slate-500 cursor-pointer">
            Pricing
          </div>
          <div className="w-1/4  justify-center items-center flex  hover:text-white hover:px-4 hover:py-2 hover:bg-blue-400 hover:rounded-full active:bg-slate-500 cursor-pointer">
            Doc
          </div>
          <div className="w-1/4  justify-center items-center flex  hover:text-white hover:px-4 hover:py-2 hover:bg-blue-400 hover:rounded-full active:bg-slate-500 cursor-pointer">
            About
          </div>
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded-full text-white font-semibold">
          Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
