import { NextResponse } from "next/server";
import pressData from "../../data/press.json";
import twitterData from "../../data/twitter.json";
import { DateTime } from "luxon";
import { getAllBlogPosts } from "../shared/posts";
import dayjs from "dayjs";

function escapeXml(unsafe: string) {
  if (typeof unsafe !== "string") {
    return unsafe;
  }
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const postData = getAllBlogPosts();
  const data = {
    site: {
      url: "https://jaredwray.com",
      description:
        "Jared Wray - I am the CTO and Co-Founder of Palmetto building a platform to enable renewable energy. Here you can learn more about my other investments and open source projects.",
      authorName: "Jared Wray",
      authorEmail: "me@jaredwray.com",
      feed: {
        url: "https://jaredwray.com/feed.xml",
        title: "Blog and Press",
      },
    },
  };

  const xmlContent = `
  
      <feed xmlns="http://www.w3.org/2005/Atom">
          <id>${data.site.feed.url}</id>
          <title>${data.site.feed.title} | ${data.site.authorName}</title>
          <updated>${dayjs().toDate()}</updated>
          <generator>JW</generator>
          <author>
              <name>${data.site.authorName}</name>
              <email>${data.site.authorEmail}</email>
              <uri>${data.site.url}</uri>
          </author>
          <link rel="alternate" href="${data.site.feed.url}"/>
          <link rel="self" href="${data.site.feed.url}"/>
          <rights>2022 All Rights Reserved Jared Wray</rights>
  
          ${twitterData
            .map((tweet) => {
              return `<entry>
              <title type="html">${escapeXml(tweet.title)}</title>
              <id>${escapeXml(tweet.url)}</id>
              <link href="${escapeXml(tweet.url)}" />
              <updated>${escapeXml(tweet.createdDate)}</updated>
              <summary type="html">${escapeXml(tweet.text)}</summary>
              <content type="html">${escapeXml(tweet.text)}</content>
              <author>
                  <name>${escapeXml(tweet.authorName)}</name>
              </author>
            </entry>`;
            })
            .join("")}
          
          ${postData
            .map((post) => {
              const escapedTitle = escapeXml(post.title);
              const sanitizedTitle = escapeXml(post.link)

              return `<entry>
              <title type="html">${escapedTitle}</title>
              <id>${escapeXml(data.site.url)}/blog/${sanitizedTitle}</id>
              <link href="${escapeXml(data.site.url)}/blog/${sanitizedTitle}" />
              <updated>${escapeXml(post.date)}</updated>
              <summary type="html">${escapeXml(
                post.content.replace(/(<([^>]+)>)/gi, ""),
              )}</summary>
              <content type="html">${escapeXml(
                post.content.replace(/(<([^>]+)>)/gi, ""),
              )}</content>
              <author>
                  <name>${escapeXml(data.site.authorName)}</name>
              </author>
            </entry>`;
            })
            .join("")}
          
          ${pressData
            .map((item) => {
              return `<entry>
              <title type="html">${escapeXml(item.title)}</title>
              <id>${escapeXml(item.source.link)}</id>
              <link href="${escapeXml(item.source.link)}" />
              <updated>${escapeXml(item.source.date)}</updated>
              <summary type="html">${escapeXml(item.content)}</summary>
              <content type="html">${escapeXml(item.content)}</content>
              <author>
                  <name>${escapeXml(item.source.name)}</name>
              </author>
            </entry>`;
            })
            .join("")}
  
          
      </feed>
    `;

  return new Response(xmlContent, { headers: { "Content-Type": "text/xml" } });
}
