import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "./data/blog");

export const getAllBlogPosts = (): Post[] => {
  const allFileNames = fs.readdirSync(blogDirectory);
  const fileNames = allFileNames.filter((fileName) => fileName.endsWith(".md"));

  const posts = fileNames.map((fileName): Post => {
    const filePath = path.join(blogDirectory, fileName);

    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);
    const link = data.title.split(/\s+/)
    .slice(0, 5)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
    // @ts-ignore
    return {
      ...data,
      content,
      filePath,
      link
    };
  });

  return posts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
};

export interface Post {
  title: string;
  link:string;
  tags: string[];
  date: string;
  featured_image?: string;
  content: string;
  filePath?: string;
}
