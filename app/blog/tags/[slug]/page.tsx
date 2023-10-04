import React from "react";
import Link from "next/link";
import NavBar from "@/app/components/nav-bar";
import TagList from "@/app/blog/components/tag-list";
import Footer from "@/app/components/footer";
import { getAllBlogPosts, Post } from "@/app/shared/posts";
import { formatDate } from "@/app/shared/format-date";
import { Metadata } from "next";

import "@/assets/css/shared.css";
import "@/assets/css/blog.css";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const tag: string = slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Jared Wray | ${tag}`,
    description: "Jared Wray | Tags",
    openGraph: {
      url: `https://jaredwray.com/blog/tags/${slug}`,
      title: `${tag} | Jared Wray Blog`,
      type: "website",
    },
  };
}

const page = ({ params }: { params: { slug: string } }) => {
  const posts = getAllBlogPosts();
  const allTags: string[] = Array.from(
    new Set(posts.flatMap((post) => post.tags)),
  );
  const filteredPosts: Post[] = [];
  posts.map((post: Post) => {
    const lowercaseSlug = params.slug.replace(/-/g, " ").toLowerCase();
    const isTagIncluded = post.tags.some(
      (tag) => tag.toLowerCase() === lowercaseSlug,
    );

    if (isTagIncluded) {
      filteredPosts.push(post);
    }
  });

  return (
    <>
      <NavBar />
      <main>
        <div className="body-container">
          <section>
            <div className="blog-post-container">
              {filteredPosts.map((post, index) => {
               
                return (
                  <Link
                    key={index}
                    href={`/blog/${post.link}`}
                    aria-label={post.title}
                  >
                    <div className="blog-post">
                      {post.featured_image && (
                        <img
                          src={`/images/blog/${post.featured_image}`}
                          alt={post.title}
                        />
                      )}

                      <h2>{post.title}</h2>
                      <p>
                        <i>{formatDate(post.date, "MM/DD/YYYY")}</i>
                      </p>
                    </div>
                    <hr />
                  </Link>
                );
              })}
            </div>
            <TagList allTags={allTags} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
