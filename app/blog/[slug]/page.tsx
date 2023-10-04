import React from "react";
import type { Metadata } from "next";
import "@/assets/css/shared.css";
import "@/assets/css/blog.css";
import NavBar from "@/app/components/nav-bar";
import BlogPost from "@/app/blog/components/blog-post";
import Footer from "@/app/components/footer";
import NextPost from "@/app/blog/components/next-post";
import PreviousPost from "@/app/blog/components/previous-post";
import TagList from "@/app/blog/components/tag-list";
import { getAllBlogPosts } from "@/app/shared/posts";
import { Highlight } from "@/app/components/highlight";

type Props = {
  params: { slug: string };
};

const posts = getAllBlogPosts();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const [post] = posts.filter((post) => {
    return post.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .includes(slug.replace(/-/g, " "));
  });

  return {
    title: post.title,
    description: post.content.slice(0, 150).replace(/(<([^>]+)>)/gi, ""),
    openGraph: {
      url: `https://jaredwray.com/blog/${slug}`,
      title: post.title,
      description: post.content.slice(0, 150).replace(/(<([^>]+)>)/gi, ""),
      type: "website",
    },
  };
}

const page = ({ params }: { params: { slug: string } }) => {
  const allTags: string[] = Array.from(
    new Set(posts.flatMap((post) => post.tags)),
  );
  const currentIndex = posts.findIndex((post) => {
   
      
      
      return post.link === params.slug;
    });
  const post = posts[currentIndex];
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!post) return <h1>Post not found</h1>;

  return (
    <>
      <NavBar />
      <main>
        <div className="body-container">
          <div className="tag-list">
            <div className="blog-post-container post-container">
              <BlogPost post={post} />
              <div className="blog-post-link-container">
                {previousPost && <PreviousPost post={previousPost} />}
                {nextPost && <NextPost post={nextPost} />}
              </div>
            </div>
            <TagList allTags={allTags} />
          </div>
        </div>
      </main>
      <Footer />
      <Highlight />
    </>
  );
};

export default page;
