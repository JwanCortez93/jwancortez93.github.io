import React from "react";
import data from "../../data/press.json";
import Link from "next/link";

export interface PressData {
  title: string;
  source: { date: string; name: string; link: string };
  content: string;
}

const Press = () => {
  const pressList: PressData[] = data;
  return (
    <div id={"press"}>
      <h3 className="body-container-header">Press</h3>
      <hr />

      <ul className="press-list">
        {pressList.map((press, index) => {
          return (
            <li key={index}>
              <Link className="link" href={press.source.link}>
                {press.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Press;
