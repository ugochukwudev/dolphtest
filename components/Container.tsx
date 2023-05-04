"use client";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
const Container = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="w-full flex flex-col lg:flex-row  justify-between h-[100vh] lg:h-[calc(100vh-200px)] gap-10 lg:gap-6">
      {/* first container */}
      <div className="bg-white dark:bg-black shadow-sm shadow-[#008E97] rounded-lg w-full lg:w-4/12 h-[30vh] lg:h-[65vh] p-6 overflow-y-scroll">
        <div className="relative h-[44px] w-full mb-10">
          <input
            className=" w-full outline-none h-full bg-white text-black dark:text-white dark:bg-black border-none font-medium text-[16px] leading-7 shadow-sm shadow-[#008E97] px-4 py-2 rounded-lg"
            placeholder="search dolph.js"
          />
          <FcSearch className="absolute top-[30%] cursor-pointer w-[24px] h-[24px] right-4" />
        </div>
        <div className="shadow-sm shadow-[#008E97] cursor-pointer transition-all duration-1000  rounded-lg w-full min-h-[44px] justify-center items-c flex-col  px-6 flex">
          <div
            onClick={() => {
              setShowContent((prev) => !prev);
            }}
            className="flex justify-between w-full items-center my-3"
          >
            <p className="font-semibold text-[16px]">Auth</p>
            <RiArrowDropDownLine className=" w-6 h-6 " />
          </div>
          {showContent && (
            <div className=" transition-all duration-1000">
              <p className="font-semibold text-[16px] leading-7 border-[0.5px] border-[#008E97] mx-4 my-4 px-2 rounded-md">
                Middlewares
              </p>
              <p className="font-semibold text-[16px] leading-7 border-[0.5px] border-[#008E97] mx-4 my-4 px-2 rounded-md">
                Google balaba
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="shadow-sm shadow-[#008E97]  w-full lg:w-8/12 p-6 rounded-lg h-[50vh] lg:h-[65vh]">
        <div className="h-full overflow-y-scroll">
          <p>docs content </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officia cupiditate quo doloremque ad temporibus illum porro labore
            perspiciatis molestiae iste eos mollitia nulla sint, libero dolorum
            quod necessitatibus unde?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
