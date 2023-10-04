import { NextResponse } from "next/server";
import { getAllBlogPosts } from "../shared/posts";

export async function GET() {
  const postData = getAllBlogPosts()
  const allTags: string[] = Array.from(
    new Set(postData.flatMap((post) => post.tags)),
  );
  const site = {
  
      url: "https://jaredwray.com",
      description:
        "Jared Wray - I am the CTO and Co-Founder of Palmetto building a platform to enable renewable energy. Here you can learn more about my other investments and open source projects.",
      authorName: "Jared Wray",
      authorEmail: "me@jaredwray.com",
  
  };
  const xmlContent = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
  <loc>${site.url}</loc>
  </url>
  <url>
  <loc>${site.url}/blog</loc>
  </url>
  ${postData.map((post)=>{
    return(
      `<url>
      <loc>${site.url}/blog/${post.link}</loc>
      </url>`
    )
  }).join("")}
  <url>
  <loc>${site.url}/blog/tags</loc>
  </url>
  ${allTags.map((tag)=>{
    return(
      `<url>
      <loc>${site.url}/blog/tags/${tag
        .split(/\s+/)
        .slice(0, 5)
        .join(" ")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}</loc>
      </url>`
    )
  }).join("")}
  </urlset>`;

  return new NextResponse(xmlContent, {
    headers: { "Content-Type": "text/xml" },
  });
}
