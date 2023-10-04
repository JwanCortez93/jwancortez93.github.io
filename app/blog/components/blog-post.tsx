import React from "react";
import { remark } from "remark";
import html from "remark-html";

import { formatDate } from "@/app/shared/format-date";
import { Post } from "@/app/shared/posts";

const BlogPost = async ({ post }: { post: Post }) => {
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="blog-post">
      {post.featured_image && (
        <img src={`/images/blog/${post.featured_image}`} alt={post.title} />
      )}
      <h2>{post.title}</h2>
      <p>
        <i>{formatDate(post.date, "MM/DD/YYYY")}</i>
      </p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default BlogPost;
