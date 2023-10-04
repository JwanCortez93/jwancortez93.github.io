import React from "react";
import Card from "./card";

const projects = [
  {
    link: "https://github.com/jaredwray/keyv",
    image: {
      ref: "/images/keyv.svg",
      alt: "Keyv",
      size: [200, 400],
    },
    hasRibbon: false,
    description:
      "Keyv provides a consistent interface for key-value storage across multiple backends via storage adapters. It supports TTL based expiry, making it suitable as a cache or a persistent key-value store.",
  },

  {
    link: "https://github.com/jaredwray/cacheable",
    image: {
      ref: "/images/cacheable_black.svg",
      alt: "Cacheable",
      size: [200, 400],
    },
    hasRibbon: false,
    description:
      "Cacheable provides consistent caching for Nodejs starting with `cacheable-request` module based on the Keyv storage adapter library.",
  },
  {
    link: "https://github.com/jaredwray/writr",
    image: {
      ref: "/images/writr.png",
      alt: "Writr",
      size: [200, 600],
    },
    hasRibbon: false,
    description:
      "Writr is an easy to use blogging tool enabling you to take markdown and build a blog within minutes. The end goal of this is to provide exporting, static generation, themes, and enablement via multiple systems such as Wordpress and Ghost.",
  },
  {
    link: "https://github.com/jaredwray/ecto",
    image: {
      ref: "/images/ecto.png",
      alt: "Ecto",
      size: [200, 600],
    },
    hasRibbon: false,
    description:
      "Modern Template Consolidation Engine for EJS, Markdown, Pug, Nunjucks, Mustache, and Handlebars.",
  },
  {
    link: "https://github.com/jaredwray/docula",
    image: {
      ref: "/images/docula.png",
      alt: "Docula",
      size: [200, 600],
    },
    hasRibbon: false,
    description:
      "Docula makes generating a website for your projects simple and beautiful. Keep your data in GitHub, but still have an amazing site for your project.",
  },
  {
    link: "https://github.com/jaredwray/airhorn",
    image: {
      ref: "/images/airhorn.png",
      alt: "Airhorn",
      size: [200, 600],
    },
    hasRibbon: false,
    description:
      "Airhorn was born out of a need to enable a more robust notifications system for many of the applications that were built and maintained by the team. We focused on making it cloud native by default (using cloud services) and also scalable with queue management and retry rate so that you can scale to hundreds if not thousands of instances.",
  },
];

const Projects = () => {
  return (
    <div id={"projects"}>
      <h3 className="body-container-header">Projects</h3>
      <hr />

      <div className="feature-card">
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Card
                  link={project.link}
                  image={project.image}
                  hasRibbon={project.hasRibbon}
                  description={project.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
