import React from "react";
import Link from "next/link";
import { Post } from "@/app/shared/posts";

const NextPost = ({ post }: { post: Post }) => {
  const link = post.title
    .split(/\s+/)
    .slice(0, 5)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return (
    <div className="blog-post-link-right">
      <Link href={`/blog/${link}`} className="post-button">
        {" "}
        {post.title} &gt;
      </Link>
    </div>
  );
};

export default NextPost;
