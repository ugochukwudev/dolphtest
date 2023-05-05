"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type Props = {
  status: Boolean;
};
const Logo = ({ status }: Props) => {
  const [logo, setLogo] = useState<Boolean>(true);
  useEffect(() => {
    setLogo(status);
  }, [status]);

  return (
    <>
      {logo ? (
        <Image
          src="/logo-black.svg"
          width={150}
          height={150}
          className=""
          alt="oops"
        />
      ) : (
        <Image
          src="/logo.png"
          width={150}
          height={150}
          className=""
          alt="oops"
        />
      )}
    </>
  );
};

export default Logo;
