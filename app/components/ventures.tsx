import React from "react";
import Card from "./card";

const ventures = [
  {
    link: "https://palmetto.com",
    image: {
      ref: "/images/palmetto.png",
      alt: "Palmetto",
      size: [200, 400],
    },
    hasRibbon: false,
    description:
      "Palmetto is leading the world into a clean energy future by making it easy for homeowners across the United States to switch from fossil fuels to solar energy. Our end-to-end approach takes the guesswork out of solar savings, guarding individual and natural resources from unnecessary waste.",
  },

  {
    link: "https://fons.com/",
    image: {
      ref: "/images/fons.png",
      alt: "Fons",
      size: [200, 400],
    },
    hasRibbon: true,
    description:
      "Fons is a professional online service for teachers of all disciplines that automates billing and scheduling and eliminates the time teachers spend on administrative tasks.",
  },

  {
    link: "https://promoter.io",
    image: {
      ref: "/images/promoter.png",
      alt: "Promoter",
      size: [200, 600],
    },
    hasRibbon: true,
    description:
      "The most effective way to engage and learn from customers. Capture actionable customer feedback using the Net Promoter System® to proactively reduce churn and drive growth.",
  },
  {
    link: "https://techcrunch.com/2013/11/19/centurylink-buys-tier3-the-infrasructure-platform-and-advanced-cloud-management-provider/",
    image: {
      ref: "/images/tier3.jpg",
      alt: "Tier3",
      size: [200, 600],
    },
    hasRibbon: true,
    description:
      "Tier 3 is a global cloud computing company that was acquired by CenturyLink in 2013. Read more here...",
  },
];

const Ventures = () => {
  return (
    <div id={"ventures"}>
      <h3 className="body-container-header">Ventures</h3>
      <hr />
      <div className="feature-card">
        <ul>
          {ventures.map((venture, index) => {
            return (
              <li key={index}>
                <Card
                  link={venture.link}
                  image={venture.image}
                  hasRibbon={venture.hasRibbon}
                  description={venture.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Ventures;
