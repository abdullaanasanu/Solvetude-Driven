// Imports
import React, { useEffect, useState } from "react";
import classNames from "classnames";

// UI Imports
import { Wrapper } from "@/components/common/wrapper";
import style from "./style.module.scss";
import { Button } from "@/components/common/button";

const points = [
  {
    title: "Among the most trusted in the region",
    description:
      "Our agents and staff are rated 4.5 stars on Google and have operated in the market for over a decade",
  },
  {
    title: "We move fast",
    description:
      "If you’re buying and need to close quickly, look no further. Your dedicated agent and conveyance team can close deals in as fast as 24 hours",
  },
  {
    title: "We move fast",
    description:
      "If you’re buying and need to close quickly, look no further. Your dedicated agent and conveyance team can close deals in as fast as 24 hours",
  },
];

const videos = [
  "/background/bg-1.mp4",
  "/background/bg-2.mp4",
  "/background/bg-3.mp4",
];

// Component
export const Header = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  // use effect to change video every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((activeVideo + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeVideo]);

  //   on dot click
  const onDotClick = (index: number) => {
    setActiveVideo(index);
  };

  return (
    <header className={style.header}>
      <video autoPlay muted loop className={style.video} key={activeVideo}>
        <source src={videos[activeVideo]} type="video/mp4" />
      </video>
      <div className={style.shade} />
      <Wrapper className={style.content}>
        <p className={style.tag}>Your Property</p>
        <h1 className={style.title}>
          Experts in buying, renting or selling properties in Dubai
        </h1>
        <div className={style.why}>
          <h2>Why Choose Driven?</h2>
          <div className={style.points}>
            {points.map((point, index) => (
              <div className={style.point} key={index}>
                <h6>{point.title}</h6>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p>Let’s get started</p>
        <Button title="Buy" className={style.buy} />

        <div className={style.dots}>
          {videos.map((video, index) => (
            <div
              className={classNames(style.dot, {
                [style.active]: index === activeVideo,
              })}
              key={index}
              onClick={() => onDotClick(index)}
            ></div>
          ))}
        </div>
      </Wrapper>
    </header>
  );
};
