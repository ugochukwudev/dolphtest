"use client";
import { Category, Post } from "@/typings";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
import Content from "./Content";
import { usePathname } from "next/navigation";
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";
type Props = {
  contents: [Category];
  posts: [Post];
};
const Container = ({ contents, posts }: Props) => {
  const [slugContent, setSlugContent] = useState<any>();
  let slug = usePathname();
  useEffect(() => {
    const content: any = posts?.find((e: Post) => {
      console.log(e.slug.current);

      return e.slug.current == slug.slice(1);
    });
    setSlugContent(content);
  }, [slug, posts]);
  return (
    <div className="w-full flex flex-col lg:flex-row  justify-between h-[100vh] lg:h-[calc(100vh-200px)] gap-10 lg:gap-6">
      {/* first container */}
      <div className="bg-white dark:bg-black shadow-sm shadow-[#008E97] overflow-x-hidden rounded-lg w-full lg:w-4/12 h-[30vh] lg:h-[65vh] p-6 overflow-y-scroll">
        <div className="relative h-[44px] w-full mb-10">
          <input
            className=" w-full outline-none h-full bg-white text-black dark:text-white dark:bg-black border-none font-medium text-[16px] leading-7 shadow-sm shadow-[#008E97] px-4 py-2 rounded-lg"
            placeholder="search dolph.js"
          />
          <FcSearch className="absolute top-[30%] cursor-pointer w-[24px] h-[24px] right-4" />
        </div>
        <div className="shadow-sm shadow-[#008E97] cursor-pointer transition-all duration-1000  rounded-lg flex-col  px-6 flex">
          {contents?.map((e: any, i: number) => {
            return <Content data={e} key={i} posts={posts} />;
          })}
        </div>
      </div>
      <div className="shadow-sm shadow-[#008E97]  w-full lg:w-8/12 p-6 rounded-lg h-[50vh] lg:h-[65vh]">
        <div className="h-full overflow-y-scroll">
          {usePathname() === "/" ? (
            <p className="text-4xl font-bold leading-10">
              Welcome To Dolph.js 😘 😘 😘!
            </p>
          ) : (
            <div>
              <PortableText
                value={slugContent?.body}
                components={RichTextComponents}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
