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

    // <div className="flex justify-center items-center  bg-slate-400 h-screen xs:gap-0.5 gap-4">
    //   <div className="sm:hidden xs:h-64 flex flex-col h-52 xm:hidden bg-slate-500 rounded p-4 ">
    //     <img
    //       src="https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //       alt=""
    //       className="xm:hidden mb-4 h-28 w-28 rounded-full object-cover object-left-top"
    //     />
    //     <div className="text-white">Azukwa Patience</div>
    //     <div>Marketing Agent</div>
    //   </div>

    // </div>

    // <>
    //   <div className="text-lg font-semibold h-16 flex-1 bg-gray-400 flex justify-center text-sky-200">
    //     Home
    //   </div>
    //   <div className="text-lg font-semibold h-16 flex-1 bg-gray-400 flex mx-auto container text-sky-200">
    //     Cart
    //     <div>ijowe</div>
    //   </div>
    //   <button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
    //   <button class="bg-violet-500 hover:bg-violet-600 active:bg-slate-500 focus:outline-none focus:ring focus:ring-violet-300 ...">
    //     Save changes
    //   </button>
    //   <a
    //     href="#"
    //     class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
    //   >
    //     <div class="flex items-center space-x-3">
    //       <svg
    //         class="h-6 w-6 stroke-sky-50-500 group-hover:stroke-white"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //       ></svg>
    //       <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
    //         New project
    //       </h3>
    //     </div>
    //     <p class="text-slate-500 group-hover:text-white text-sm">
    //       Create a new project from a variety of starting templates.
    //     </p>
    //   </a>
    // </>
    // <>
    //   <button class="btn-primary">Save changes</button>
    // </>
  );
};

export default Header;
