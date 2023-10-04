import React from "react";
import { Metadata } from "next";

import About from "@/app/components/about";
import Blogs from "@/app/components/blogs";
import Footer from "@/app/components/footer";
import NavBar from "@/app/components/nav-bar";
import Press from "@/app/components/press";
import Projects from "@/app/components/projects";
import Tweets from "@/app/components/tweets";
import Ventures from "@/app/components/ventures";

import "@/assets/css/shared.css";
import "@/assets/css/home.css";

export const metadata: Metadata = {
  title: "Jared Wray",
  description:
    "Jared Wray - I am the CTO and Co-Founder of Palmetto building a platform to enable renewable energy. Here you can learn more about my other investments and open source projects.",
  openGraph: {
    url: "https://jaredwray.com",
    title: "Jared Wray",
    description:
      "Thoughts on Cloud Computing, Technology, Docula, Writr, and Other Open Source Project",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className="body-container">
          <About />
          <Ventures />
          <Tweets />
          <Projects />
          <Blogs />
          <Press />
        </div>
      </main>
      <Footer />
    </>
  );
}
