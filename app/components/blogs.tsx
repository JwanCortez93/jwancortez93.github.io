import React from "react";
import Collection from "@/app/blog/components/collection";
import { getAllBlogPosts } from "@/app/shared/posts";

const Blogs = () => {
  return (
    <div id={"latest-blogs"}>
      <h3 className="body-container-header">Latest Blog Posts</h3>
      <hr />

      <Collection allPosts={getAllBlogPosts().slice(0, 12)} />
    </div>
  );
};

export default Blogs;
