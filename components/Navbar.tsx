import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [expand, setExpand] = useState<boolean>(false);
  
  const expandHandler = () => {
    setExpand(!expand);
  };



  return (
    <>
      <div className=" h-20 flex items-center justify-between bg-mainBg shadow-neoShadowOutInvert">
        <p className="pl-10 sm:pl-20 text-2xl text-mainText">M-Phone</p>
        <div className="pr-20 hidden sm:block">
          <Link
            className=" px-4 py-2 font-semibold text-mainText text-xl rounded-xl font-sans mx-3 shadow-neoShadowOut hover:shadow-neoShadowIn"
            href="/"
          >
            Overview
          </Link>
          <Link
            className=" px-4 py-2 font-semibold text-mainText text-xl rounded-xl font-sans mx-3 shadow-neoShadowOut hover:shadow-neoShadowIn"
            href="/Specs"
          >
            Specs
          </Link>
        </div>
        <div
          onClick={expandHandler}
          className="block sm:hidden cursor-pointer mr-10 p-2 rounded-3xl shadow-neoShadowOut hover:shadow-neoShadowIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div
        className={`flex flex-col bg-mainBg w-full transition-all duration-300 shadow-neoShadowOutInvert ${
          expand ? "scale-100 h-44" : "scale-0 h-0"
        }`}
      >
        <Link
          className="flex justify-center my-4 mx-8 px-6 py-2 font-semibold text-mainText text-xl rounded-xl font-sans shadow-neoShadowOut hover:shadow-neoShadowIn"
          href="/"
        >
          Overview
        </Link>
        <Link
          className="flex justify-center my-4 mx-8 px-6 py-2 font-semibold text-mainText text-xl rounded-xl font-sans shadow-neoShadowOut hover:shadow-neoShadowIn"
          href="/Specs"
        >
          Specs
        </Link>
      </div>
    </>
  );
}

export default Navbar 