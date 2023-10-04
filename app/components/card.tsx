import Link from "next/link";
import React from "react";

const Card = ({
  link,
  image,
  hasRibbon,
  description,
}: {
  link: string;
  image: { ref: string; alt: string; size: number[] };
  hasRibbon: boolean;
  description: string;
}) => {
  return (
    <div className="relative">
      {hasRibbon && (
        <div className="ribbon">
          <span>ACQUIRED</span>
        </div>
      )}
      <Link href={link}>
        <div
          className={
            image.ref === "/images/promoter.png"
              ? "feature-card-promoter"
              : "feature-card-img"
          }
        >
          <img className="feature-img" src={image.ref} alt={image.alt} />
        </div>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Card;
