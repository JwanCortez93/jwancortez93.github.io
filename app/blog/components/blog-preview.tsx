import React from "react";
import Link from "next/link";
import { formatDate } from "@/app/shared/format-date";
import { Post } from "@/app/shared/posts";

const BlogPreview = ({ firstPost }: { firstPost: Post }) => {
  

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Link href={`/blog/${firstPost.link}`}>
          <img
            src={`/images/blog/${firstPost.featured_image}`}
            alt={firstPost.title}
          />
        </Link>
        <h2>{firstPost.title}</h2>
        <p>
          <i>{formatDate(firstPost.date, "MM/DD/YYYY")}</i>
        </p>
      </div>
    </div>
  );
};

export default BlogPreview;
