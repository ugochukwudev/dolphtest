"use client";
import { Category, Post } from "@/typings";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
type Props = {
  data: Category;
  posts: [Post];
};
const Content = ({ data, posts }: Props) => {
  const [showContent, setShowContent] = useState(false);
  const [children, setChildren] = useState<[Post]>();
  useEffect(() => {
    const children: any = posts.filter((e: Post) => {
      return e.categories._id === data._id;
    });
    setChildren(children);
  }, [posts, data._id]);

  return (
    <>
      <div
        onClick={() => {
          setShowContent((prev) => !prev);
        }}
        className="flex justify-between  items-center my-3"
      >
        <p className="font-semibold text-[16px]">{data.title}</p>
        <RiArrowDropDownLine
          className={`w-6 h-6 ${showContent ? "rotate-180" : ""}`}
        />
      </div>
      {showContent && (
        <div className=" transition-all duration-1000 w-full ">
          {children?.map((e: Post, i: number) => {
            return (
              <div
                key={i}
                className="border-[0.5px] border-[#008E97] mx-4 my-4 px-2 rounded-md"
              >
                <Link
                  href={e.slug.current}
                  key={i}
                  className="font-semibold text-[16px] break-words leading-7 "
                >
                  {e.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Content;
