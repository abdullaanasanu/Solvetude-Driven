// Imports
import React from "react";

// UI Imports
import { Wrapper } from "@/components/common/wrapper";
import style from "./style.module.scss";
import { Button } from "@/components/common/button";

// blogs
const blogs = [
  {
    image: "/blogs/one.jpg",
    tag: "Blog",
    duration: "5 mins reading",
    heading: "Dubai’s Tallest Residential Buildings: A Sky-High Retreat",
    description:
      "Dubai is renowned for its amazing skyline and modern architecture that draws tourists from all parts of the world.",
    author: {
      avatar: "/author.jpg",
      name: "Ward Mohammad",
    },
  },
  {
    image: "/blogs/two.jpg",
    tag: "Podcast",
    duration: "15 mins listening",
    heading: "Real Estate Podcast: The Future of Property Investment",
    description:
      "Listen to our latest podcast episode where we discuss the future of property investment in Dubai and the UAE.",
    author: {
      avatar: "/author.jpg",
      name: "Ward Mohammad",
    },
  },
  {
    image: "/blogs/three.jpg",
    tag: "Insight",
    duration: "10 mins reading",
    heading: "Investing in Dubai: The Best Areas to Buy Property",
    description:
      "Discover the best areas to buy property in Dubai based on your budget, lifestyle, and preferences.",
    author: {
      avatar: "/author.jpg",
      name: "Ward Mohammad",
    },
  },
  {
    image: "/blogs/four.jpg",
    tag: "Blog",
    duration: "7 mins reading",
    heading: "The Ultimate Guide to Renting a Property in Dubai",
    description:
      "Renting a property in Dubai can be a daunting task. Read our ultimate guide to renting a property in Dubai.",
    author: {
      avatar: "/author.jpg",
      name: "Ward Mohammad",
    },
  },
];

// Component
export const Blogs = () => {
  return (
    <header className={style.blogs}>
      <Wrapper className={style.content}>
        <h2 className={style.title}>
          The latest blogs, podcasts, and real estate insights
        </h2>
        <div className={style.list}>
          {blogs.map((blog, index) => (
            <div key={index} className={style.item}>
              <div className={style.image}>
                <img src={blog.image} alt="Blog" />
                <span className={style.tag}>{blog.tag}</span>
              </div>
              <div className={style.details}>
                <p className={style.duration}>{blog.duration}</p>
                <h3 className={style.heading}>{blog.heading}</h3>
                <p className={style.description}>{blog.description}</p>
                <Button title="Read More" className={style.button} />
                <div className={style.author}>
                  <img src={blog.author.avatar} alt="Avatar" />
                  <div className={style.info}>
                    <p className={style.head}>Written by</p>
                    <p className={style.name}>{blog.author.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button title="Explore more" className={style.explore} />
      </Wrapper>
    </header>
  );
};
