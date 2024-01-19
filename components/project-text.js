"use client";
import { useState, useEffect } from "react";
import classes from "./project-text.module.css";
import Link from "next/link";

const text = [
  {
    title: "E-commerce agricultural products",
    description:
      "This is my first project. Full stack of a website where you can publish and buy agricultural products. Built with Angular",
    link: "https://github.com/juanserodriguez29/Grupo4",
  },
  {
    title: "Foodies page",
    description:
      "Discover new flavors and share your favorite recipes. Created with Next.js and SQLite3",
    link: "https://github.com/juanserodriguez29/Foodies.git",
  },
  {
    title: "Image search",
    description:
      "Search for your favorite images of any topic. Built with React and connection with Unsplash API.",
    link: "https://github.com/juanserodriguez29/Images_search",
  },
  {
    title: "Monster attack",
    description:
      "Game that simulates a fight between the player and a monster, you can see the records of the attacks on the console. Built with Javascript",
    link: "https://github.com/juanserodriguez29/Monster_killer",
  },
  {
    title: "My favorite films",
    description:
      "You will be able to add a title, an image and give a rating to your favorite movies, all in one place. Built with Javascript",
    link: "https://github.com/juanserodriguez29/Rating_movies",
  },
];

export { text, ProjectText };

function ProjectText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex < text.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      <>
        {text.map((text, index) => (
          <h1
            key={index}
            className={index === currentTextIndex ? classes.active : ""}
          >
            {text.title}
          </h1>
        ))}
      </>
      <>
        {text.map((text, index) => (
          <>
            <p
              key={index}
              className={index === currentTextIndex ? classes.active : ""}
            >
              {text.description}
              <br></br>
              <a
                href={text.link}
                className={index === currentTextIndex ? classes.active : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more on GitHub
              </a>
            </p>
          </>
        ))}
      </>
    </div>
  );
}
