import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div className="flex justify-center items-center  bg-slate-400 h-screen xs:gap-0.5 gap-4">
        <div className="sm:hidden xs:h-64 flex flex-col h-52 xm:hidden bg-slate-500 rounded p-4 ">
          <img
            src="https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="xm:hidden mb-4 h-28 w-28 rounded-full object-cover object-left-top"
          />
          <div className="text-white">Azukwa Patience</div>
          <div>Marketing Agent</div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
