import React from "react";
import Link from "next/link";
import { formatDate } from "@/app/shared/format-date";
import { Post } from "@/app/shared/posts";

const Collection = ({ allPosts }: { allPosts: Post[] }) => {
  return (
    <div className="grid">
      {allPosts.map((post, index) => {
        const link = post.title.split(/\s+/).slice(0, 5).join(" ");

        const kebabCaseString = link
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

        return (
          <div className="grid-item" key={index}>
            <Link href={`/blog/${kebabCaseString}`} aria-label={post.title}>
              <div className="grid-item-content">
                <h3 className="feed-title">{post.title}</h3>
                <ul className="feed-metadata">
                  <li>{formatDate(post.date, "MM/DD/YYYY")}</li>
                </ul>
              </div>
            </Link>
            <img
              src={`/images/blog/${post.featured_image}`}
              alt={post.title}
              width={370}
              height={648}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Collection;
