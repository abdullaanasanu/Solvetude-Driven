// Imports
import React, { useEffect, useState } from "react";
import classNames from "classnames";

// UI Imports
import { Wrapper } from "@/components/common/wrapper";
import style from "./style.module.scss";
import { Button } from "@/components/common/button";

const medias = [
  {
    images: [
      {
        src: "/showcase/1.jpg",
        position: "one",
      },
      {
        src: "/showcase/2.jpg",
        position: "two",
      },
    ],
    showButton: false,
  },
  {
    images: [
      {
        src: "/showcase/3.jpg",
        position: "three",
      },
      {
        src: "/showcase/1.jpg",
        position: "four",
      },
    ],
    showButton: true,
  },
];

// Component
export const Showcase = () => {
  const [activeMedia, setActiveMedia] = useState(1);

  // use effect to change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMedia((activeMedia + 1) % medias.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeMedia]);

  //   on dot click
  const onDotClick = (index: number) => {
    setActiveMedia(index);
  };

  return (
    <header className={style.showcase}>
      <Wrapper className={style.content}>
        <h2 className={style.title}>Check out the best area guides in Dubai</h2>
        <p className={style.description}>
          These popular areas cater to diverse preferences, from luxurious
          waterfront lifestyles to a vibrant urban experience.
        </p>

        <img
          src="/icons/arrow-left.svg"
          alt="Arrow Left"
          className={style.left}
          onClick={() =>
            setActiveMedia((activeMedia - 1 + medias.length) % medias.length)
          }
        />

        <img
          src="/icons/arrow-right.svg"
          alt="Arrow Right"
          className={style.right}
          onClick={() => setActiveMedia((activeMedia + 1) % medias.length)}
        />

        <div className={style.media}>
          {medias.map((media, index) => (
            <div
              className={classNames(style.mediaItem, {
                [style.active]: index === activeMedia,
              })}
              key={index}
            >
              {media.images.map((image, index) => (
                <img
                  src={image.src}
                  alt="Showcase"
                  className={style[image.position]}
                  key={index}
                />
              ))}
              {media.showButton && (
                <Button title="See all" className={style.button} />
              )}
            </div>
          ))}
        </div>

        <div className={style.dots}>
          {medias.map((media, index) => (
            <div
              className={classNames(style.dot, {
                [style.active]: index === activeMedia,
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
