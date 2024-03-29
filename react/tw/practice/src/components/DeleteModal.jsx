import React from "react";

const DeleteModal = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 h-1/3 bg-slate-400 rounded-lg flex justify-around flex-col items-center ">
          <div className="h-1/2 flex items-center">
            Are you sure you want to delete your account?
          </div>
          <div className="h-1/2 items-center flex w-full justify-around p-4">
            <button className="bg-indigo-300 px-4 py-2 rounded-lg w-20 hover:border-2">
              Cancel
            </button>
            <button className="bg-indigo-300 px-4 py-2 rounded-lg w-20 hover:border-2">
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
