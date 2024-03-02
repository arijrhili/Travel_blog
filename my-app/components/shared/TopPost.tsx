import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import { blogData } from "@/constants/blogData";
import Head from 'next/head';

const TopPost = () => {
  const topPost = blogData.filter(
    (blog) => blog.topPost === true
  );
  return (
    <>
     <Head>
        <title>{topPost[0].title}</title>
        <meta name="description" content="Top articals of medical  news " />
      </Head>
    <section aria-labelledby="top-post">
      <div className="w-full text-center">
        
      </div>

      <div className="max-w-screen-md mx-auto">
        {topPost.map((post, index) => (
            <Link href={{pathname:`/blog/${post.id}`,query:{...post}}}>
            <article key={index}>
              <div className="relative cursor-pointer">
               
                  <Image
                    src={post.image_path}
                    width={650}
                    height={650}
                    alt={`Image for ${post.title}`}
                  />
               
                <Overlay />
              </div>
              <div className="w-full flex justify-center">
                <Tag text={post.tags} />
              </div>

              <h3 className="font-extrabold uppercase text-tertiary text-center">
                {post.title}
              </h3>

              <div className="flex gap-3 justify-center mt-2">
                <span className="font-light">
                  By: {post.authorName}
                </span>
                <span className="italic font-light">
                  {post.publishDate}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
};

export default TopPost;
