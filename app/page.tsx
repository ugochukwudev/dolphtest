import Container from "@/components/Container";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "../components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import { draftMode } from "next/headers";
const query = groq`*[_type=="post"] {
  ...,
  author->,
  categories->
} | order(_createdAt desc)`;
const categories = groq`*[_type=="category"] {
  ...
} | order(_createdAt desc)`;
export const revalidate = 60; // revalidate this page every 60 seconds
export default async function Home() {
  const cat = await client.fetch(categories);
  const posts = await client.fetch(query);

  if (draftMode().isEnabled) {
    return (
      <PreviewSuspense fallback={<div>Loading preview...</div>}>
        <PreviewBlogList query={query} cat={cat} />
      </PreviewSuspense>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-20 px-4 lg:px-20 py-10">
        <Container contents={cat} posts={posts} />
      </div>
    </>
  );
}
