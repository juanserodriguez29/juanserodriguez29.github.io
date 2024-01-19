"use client";
import { useState, useEffect } from "react";
import vegetables from "@/assets/img/post-1.png";
import imagesSearch from "@/assets/img/Search.jpg";
import monster from "@/assets/img/Monster Attack.jpg";
import cine from "@/assets/img/Cine.jpg";
import Image from "next/image";
import classes from "./project-image.module.css";

const images = [
  { image: vegetables, description: "E-commerce productos agrícolas" },
  { image: imagesSearch, description: "Buscador de imágenes" },
  { image: monster, description: "Ataque de monstruo" },
  { image: cine, description: "Mis películas favoritas" },
];

export default function ProjectImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt=""
              className={index === currentImageIndex ? classes.active : ""}
            />
      ))}
    </div>
  );
}
