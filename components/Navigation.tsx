"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import Logo from "./Logo";
const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 lg:px-20 py-6 lg:py-10">
      <div className="">
        <Link href="/">
          <Logo status={darkMode} />
        </Link>
      </div>
      <ul className="flex gap-6 mt-2 lg:mt-0 text-black items-center justify-center dark:text-white font-semibold cursor-pointer">
        <Link href="/about">About</Link>

        <li>Github</li>
        {darkMode && (
          <BsToggleOff
            className=" w-6 h-6"
            onClick={() => {
              console.log("clicked");
              setDarkMode((prev) => !prev);
              if (typeof window !== "undefined") {
                if (localStorage.getItem("mode") === "dark") {
                  console.log("dark");

                  localStorage.setItem("mode", "light");
                } else {
                  console.log("light");

                  localStorage.setItem("mode", "dark");
                }

                document?.querySelector("html")?.classList.toggle("dark");
              }
            }}
          />
        )}
        {!darkMode && (
          <BsToggleOn
            className="w-6 h-6 text-[#008E97]"
            onClick={() => {
              console.log("clicked");
              setDarkMode((prev) => !prev);
              if (typeof window !== "undefined") {
                if (localStorage.getItem("mode") === "dark") {
                  console.log("dark");

                  localStorage.setItem("mode", "light");
                } else {
                  console.log("light");

                  localStorage.setItem("mode", "dark");
                }

                document?.querySelector("html")?.classList.toggle("dark");
              }
            }}
          />
        )}
      </ul>
    </div>
  );
};

export default Navigation;
