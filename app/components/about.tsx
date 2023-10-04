import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="about-bio">
      <Image
        className="bio-img"
        alt="Jared Wray"
        src="/images/jw_avatar.png"
        width="250"
        height="250"
      />
      <h2>Hi! 👋</h2>
      <p>
        I am the CTO and Co-Founder of{" "}
        <Link href="https://palmetto.com" target="_blank" rel="noopener">
          Palmetto
        </Link>{" "}
        building a platform to enable renewable energy for everyone. If you are
        interested we are always looking for people to{" "}
        <Link
          href="https://www.linkedin.com/company/palmettosolar/jobs/"
          target="_blank"
          rel="noopener"
        >
          join our team!
        </Link>
      </p>
      <p>
        I was the CTO for{" "}
        <Link href="https://istreamplanet.com" target="_blank" rel="noopener">
          iStreamPlanet
        </Link>
        , where I revitalized the engineering team and launched a fully
        cloud-based live streaming platform that powers many of the online TV
        services you use today.
      </p>
      <p>
        Before that, I founded and built a cloud computing platform that was{" "}
        <Link href="https://techcrunch.com/2013/11/19/centurylink-buys-tier3-the-infrasructure-platform-and-advanced-cloud-management-provider/">
          acquired
        </Link>{" "}
        by CenturyLink and became their cloud platform.
      </p>
      <p>
        I am an active investor and advisor that enjoys helping other founders.
      </p>
      <p>
        👇 Scroll down to learn more about the{" "}
        <Link href="#ventures">ventures</Link> I am part of,{" "}
        <Link href="#latest-tweets">twitter activity</Link>,{" "}
        <Link href="#projects">open source projects</Link>,{" "}
        <Link href="#press">press</Link>, and latest{" "}
        <Link href="#latest-blogs">blogs.</Link>
      </p>
    </div>
  );
};

export default About;
