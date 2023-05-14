import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import { PortableTextComponents } from "@portabletext/react";

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full min-h-[300px]  mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="blog content"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => {
      return <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <h1
          id={children.toString().replaceAll(" ", "-")}
          className="text-5xl py-10 folt-bold"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl py-6 folt-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-6 folt-bold">{children}</h3>;
    },

    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-6 folt-bold">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return (
        <p className="text-[16px] leading-[30px] py-[1px] folt-normal">
          {children}
        </p>
      );
    },
    code: ({ children }: any) => {
      return (
        <div className="border-[1px] border-white w-[90%] p-4">
          <button className="bg-[#008E97] text-white px-4 py-2 active:scale-95">
            Copy
          </button>
          <br />
          <code className="text-[16px] multicolortext leading-[30px] py-[1px] folt-normal">
            {children}
          </code>
        </div>
      );
    },
    div: ({ children }: any) => {
      const data = children[0].split(" ");

      return (
        <ul className="text-[16px] ml-8 mt-4 text-[#f7ab0a] leading-[30px] py-[1px] list-disc folt-normal">
          {data.map((e: any, i: number) => {
            return (
              <a key={i} href={`#${e}`}>
                <li className="text-lg font-bold">{e}</li>
              </a>
            );
          })}
        </ul>
      );
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5">
          {children}
        </blockquote>
      );
    },
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          className=" text-[#f7ab0a] hover:decoration-black"
          rel={rel}
          href={value.href}
        >
          {children}
        </Link>
      );
    },
  },
};
