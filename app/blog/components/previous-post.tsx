import React from "react";
import Link from "next/link";
import { Post } from "@/app/shared/posts";

const PreviousPost = ({ post }: { post: Post }) => {
  const link = post.title
    .split(/\s+/)
    .slice(0, 5)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return (
    <div className="blog-post-link-left">
      <Link href={`/blog/${link}`} className="post-button">
        &lt; {post.title}
      </Link>
    </div>
  );
};

export default PreviousPost;
