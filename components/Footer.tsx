import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#008E97] w-full py-4 px-20">
      <div className="flex w-full justify-between">
        <Image
          src="/logo.png"
          width={150}
          height={300}
          className=""
          alt="logo"
        />
        <div className="flex gap-6 justify-center items-center">
          <Link href="/about">About</Link>
          <a href="https://github.com/" rel="no-refferer">
            Github
          </a>
        </div>
      </div>
      <p className="text-center">© Copyright {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
