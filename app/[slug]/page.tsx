import Container from "@/components/Container";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewBlogList from "@/components/PreviewBlogList";

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
  return (
    <>
      <div className="flex flex-col gap-20 px-4 lg:px-20 py-10">
        <Container contents={cat} posts={posts} />
      </div>
    </>
  );
}
