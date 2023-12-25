import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const AppWrap = (Component) => function HOC() {
  return (
    <div className={`w-full min-h-screen flex flex-row dak:bg-white`}>
        <div className="md:flex justify-end items-center flex-col hidden">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
      <div className="flex-1 w-full flex-col px-[2rem] py-[4rem] flex justify-center items-center">
        <Component />

        <div className="w-full pt-8 flex flex-col justify-end items-end ">
          <p className=" uppercase text-xs text-left text-gray-500 leading-relaxed md:text-lg">@2020 MICHAEL</p>
          <p className=" uppercase text-xs text-left text-gray-500 leading-relaxed md:text-lg">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap;
