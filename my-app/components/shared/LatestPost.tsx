"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";
import { blogData } from "@/constants/blogData";
import Head from "next/head";
const LatestPost = () => {
  const latestPost = blogData.filter((blog)=>blog.latestPost===true);

  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs(
      (prevVisibleBlogs) => prevVisibleBlogs + 3
    );
  };

  return (<>
    <Head>
    <title>{latestPost[0].title}</title>
    <meta name="description" content="latest articals of medical news " />
  </Head>
    <section
      className="col-span-2"
      aria-labelledby="latest-post"
    >
      
      <div className="w-full text-center">

        <h2
          id="latest-post"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Latest Post
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
      
        {latestPost
          .slice(0, visibleBlogs)
          .map((post, id) => (
            <BlogCard post={post} key={id}  />
          ))}
        {visibleBlogs < latestPost.length && (
          <div className="flex justify-center ">
            <Button
              onClick={showMoreBlogs}
              text="Show more"
              aria="Show more blog post"
            />
          </div>
        )}
      </div>
      
    </section>
    </>
  );
};

export default LatestPost;
