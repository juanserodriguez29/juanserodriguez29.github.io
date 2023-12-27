"use client";
import { useState, useEffect } from "react";
import classes from "./project-text.module.css";
import Link from "next/link";

const text = [
  {
    title: "E-commerce productos agrícolas",
    description:
      "Este es mi primer proyecto. Full stack de una página donde podrás publicar y adquirir productos agrícolas.",
    link: "https://github.com/juanserodriguez29/Grupo4",
  },
  {
    title: "Calculadora básica",
    description:
      "Este es mi segundo proyecto. Contiene funciones básicas como: suma, resta, multiplicación y división.",
    link: "https://github.com/juanserodriguez29/Math_Calculator",
  },
  {
    title: "Ataque de monstruo",
    description:
      "Juego que simula una lucha entre el jugador y un monstruo, puedes ver los registros de los ataques en la consola.",
    link: "https://github.com/juanserodriguez29/Monster_killer",
  },
  {
    title: "Mis películas favoritas",
    description:
      "Podrás agregar un título, una imagen y darle una calificación a tus películas favoritas, todo en un solo lugar.",
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
                Ver más
              </a>
            </p>
          </>
        ))}
      </>
    </div>
  );
}
