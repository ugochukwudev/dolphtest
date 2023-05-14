"use client";
import { Category } from "@/typings";
import { usePreview } from "../lib/sanity.preview";
import Container from "./Container";

type Props = {
  query: string;
  cat: [Category];
};

export default function PreviewBlogList({ query, cat }: Props) {
  const posts = usePreview(null, query);
  console.log("Loading posts....", posts);
  return <Container posts={posts} contents={cat} />;
}
