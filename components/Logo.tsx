"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const data = document.querySelector("html")?.classList[0];
  const [logo, setLogo] = useState(true);
  useEffect(() => {
    let test = document.querySelector("html")?.classList[0]?.includes("dark")
      ? true
      : false;
    console.log(test);
    setLogo(test);
  }, [data]);
  if (!logo) {
    return (
      <Image
        src="/logo-black.svg"
        width={150}
        height={150}
        className=""
        alt="oops"
      />
    );
  } else {
    return (
      <Image src="/logo.png" width={150} height={150} className="" alt="oops" />
    );
  }
};

export default Logo;
