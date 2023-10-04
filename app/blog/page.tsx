import React from "react";
import { Metadata } from "next";
import NavBar from "@/app/components/nav-bar";

import BlogPreview from "@/app/blog/components/blog-preview";

import Collection from "@/app/blog/components/collection";
import Footer from "@/app/components/footer";
import TagList from "@/app/blog/components/tag-list";
import { getAllBlogPosts } from "@/app/shared/posts";

import "@/assets/css/shared.css";
import "@/assets/css/blog.css";

export const metadata: Metadata = {
  title: "Jared Wray | Blog",
  openGraph: {
    url: "https://jaredwray.com/blog",
    title: "Jared Wray | Blog",
    description:
      "Thoughts on Cloud Computing, Technology, Docula, Writr, and Other Open Source Project",
    type: "website",
  },
};

const page = () => {
  const blogPosts = getAllBlogPosts();
  const [firstPost] = blogPosts;

  const allTags: string[] = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags)),
  );

  return (
    <>
      <NavBar />
      <main>
        <div className="body-container">
          <BlogPreview firstPost={firstPost} />
          <TagList allTags={allTags} />
          <hr />
          <Collection allPosts={blogPosts.slice(1, 13)} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
