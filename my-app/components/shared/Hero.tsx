import Overlay from "../ui/Overlay";
import Link from "next/link";
import { blogData } from "@/constants/blogData";
import Tag from "../ui/Tag";

const Hero = () => {
  const featuredPost = blogData.filter(
    (blog) => blog.featured === true
  );

  const topFeatured = featuredPost.slice(0, 1);
  const bottomFeatured = featuredPost.slice(1, 4);

  return (
    <section className="relative">
    <div className="w-[95%] mx-auto max-w-[1950px] z-1">
    <h1 className="text-6xl font-bold text-black text-center">Actualité</h1>
      {topFeatured.map((post, id) => (
        <article key={id} className="flex flex-col gap-5 mb-5 text-center relative">
          <div className="relative max-h-[500px] overflow-hidden shadow-xl">
            <Link href={{ pathname: `/blog/${post.id}`, query: { ...post } }}>
             
                <img
                  src={post.image_path}
                  alt={`image for ${post.title}`}
                  className="object-cover w-full h-full"
                />
             
            </Link>
            <Overlay />
          </div>
          <Tag text={post.tags} />
          <h2 className="text-3xl font-extrabold uppercase text-tertiary">
            {post.title}
          </h2>
          <div className="flex items-center gap-3 font-light text-tertiary  justify-center">
            <span>{post.authorName}</span>
            <span className="italic">{post.publishDate}</span>
          </div>
        </article>
        ))}

        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {bottomFeatured.map((post,id) => (
            <article
            key={id}
              className="flex flex-col gap-3 items-center text-center relative"
            >
              <Link
                className="w-full"
                href={{pathname:`/blog/${post.id}`,query:{...post}}}>
                <div className="relative  overflow-hidden h-72 shadow-xl w-full">
                
                    <img
                      src={post.image_path}
                      alt={`image for ${post.title}`}
                      className="object-cover w-full h-full "
                    />
                  
                  <Overlay />
                </div>
              </Link>

              <Tag text={post.tags} />
              <h3 className="text-1xl font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="font-light italic">{post.publishDate}</span>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
