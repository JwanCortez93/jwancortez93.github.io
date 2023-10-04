import Link from "next/link";
import React from "react";

const TagList = ({ allTags }: { allTags: string[] }) => {
  return (
    <div className="blog-post-tag-list">
      <ul>
        {allTags
          .sort((a, b) => {
            return a.localeCompare(b);
          })
          .map((tag, index) => {
            return (
              <li key={index}>
                <Link
                  href={`/blog/tags/${tag.toLowerCase().replace(/ /g, "-")}`}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TagList;
