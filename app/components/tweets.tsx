import React from "react";
import data from "../../data/twitter.json";
import Link from "next/link";

export interface TwitterData {
  title: string;
  text: string;
  imagePath: string;
  authorName: string;
  url: string;
  relativeUrl: string;
  provider: string;
  createdDate: string;
}
const Tweets = () => {
  const twitter: TwitterData[] = data;
  return (
    <div id={"latest-tweets"}>
      <h3 className="body-container-header">Latest Tweets</h3>
      <hr />

      <div className="grid">
        {twitter.map((tweet, index) => {
          return (
            <div key={index} className="grid-item">
              <Link href={tweet.url} aria-label={tweet.title}>
                <div className="grid-item-content">
                  <h4 className="feed-title">{tweet.title}</h4>
                  <ul className="feed-metadata">
                    <li>{tweet.createdDate}</li>
                    <li>|</li>
                    <li>{tweet.provider}</li>
                  </ul>
                </div>
              </Link>
              <img src={tweet.imagePath} alt={tweet.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tweets;
