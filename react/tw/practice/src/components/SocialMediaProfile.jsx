import React from "react";

const SocialMediaProfile = () => {
  return (
    <>
      <div className="flex h-screen bg-slate-400 items-center justify-center">
        <div className="flex flex-col w-4/5 bg-card-color rounded-lg p-4 xs:p-0">
          <div className="flex h-1/2 w-full justify-evenly items-center xs:flex-col xs:gap-2">
            <img
              src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="img err"
              className="xs:pt-2 object-cover rounded-full w-36 h-36"
            />
            <div className="flex justify-evenly flex-col gap-4">
              <div className="flex gap-4">
                <div className="gap-2 flex flex-col">
                  <div className="font-bold justify-center flex">100+</div>
                  <div className="font-light flex justify-center">
                    Connections
                  </div>
                </div>
                <div className="gap-2 flex flex-col">
                  <div className="font-bold justify-center flex">78</div>
                  <div className="font-light flex justify-center">
                    Following
                  </div>
                </div>
                <div className="gap-2 flex flex-col">
                  <div className="font-bold justify-center flex">10.7K</div>
                  <div className="font-light flex justify-center">
                    Followers
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly xs:justify-between items-center">
                <button className="px-6 py-2 rounded-lg bg-btn-light-blue text-btn-text-blue font-semibold">
                  Follow
                </button>
                <button className="px-6 py-2 rounded-lg bg-btn-light-blue text-btn-text-blue font-semibold">
                  Message
                </button>
              </div>
            </div>
          </div>
          <div className="h-1/2 w-full px-8 xs:px-2">
            <div className="h-2/5 flex flex-col">
              <div className="font-bold text-2xl">Justin Brown</div>
              <div className="font-light">Backend Developer | India</div>
            </div>
            <div className="h-1/5 flex w-full items-center justify-between">
              <button className="flex h-12 w-4/5 rounded-xl justify-center items-center gap-2 text-white bg-btn-bg-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                Connect
              </button>
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="h-16 w-16 cursor-pointer text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaProfile;
