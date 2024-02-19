import classes from "./project-text.module.css";
import vegetables from "@/assets/img/post-1.png";
import burger from "@/assets/img/burger.jpg";
import imagesSearch from "@/assets/img/Search.jpg";
import monster from "@/assets/img/Monster Attack.jpg";
import cine from "@/assets/img/Cine.jpg";
import movies from "@/assets/img/moviesgif.gif"
import monsterGif from "@/assets/img/Monstergif.gif"
import searchgif from "@/assets/img/searchgif.gif"
import FoodiesGif from "@/assets/img/FoodiesGif.gif"
import Ecommercegif from "@/assets/img/Ecommercegif.gif"
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce agricultural products",
    image: vegetables,
    gif: Ecommercegif,
    description:
      "This is my first project. Full stack website where you can publish and buy agricultural products. Here you can create your user and be a seller or customer, the site administrator is constantly in charge of updating the available products and their characteristics such as price, description and product name.",
    paths:["Angular", "Nodejs", "Mongodb", "JS", "CSS"],
    link: "https://agricultural-market.vercel.app/",
    git: "https://github.com/juanserodriguez29/AgriculturalMarket"
  },
  {
    id: 2,
    title: "Foodies page",
    image: burger,
    gif: FoodiesGif,
    description:
      "Discover new flavors. Here you can learn to cook some new recipes and know the details of each preparation. You can also share your favorite recipes so that everyone knows them. ",
    paths:["React", "Nextjs", "SQLite3", "JS", "CSS"],
    link: "https://foodies-project-sp.vercel.app/",
    git: "https://github.com/juanserodriguez29/Foodies"
  },
  {
    id: 3,
    title: "Image search",
    image: imagesSearch,
    gif: searchgif,
    description:
      "Search for your favorite images on any topic, you will receive the Top 20 images, with a brief description. You will be able to access and download them. Connected with Unsplash API.",
    paths:["React", "JS", "CSS"],
    link: "https://images-search-sp.vercel.app/",
    git: "https://github.com/juanserodriguez29/Images_search"
  },
  {
    id: 4,
    title: "Monster attack",
    image: monster,
    gif: monsterGif,
    description:
      "Game that simulates a fight between the player and a monster. Here you have two types of attack: normal and strong, additionally you have a small extra health that is automatically used when the monster wins. You can view the attack logs in the console by clicking the button and opening the browser console.",
    paths:["JS", "CSS"],
    link: "https://monster-killer-sp.vercel.app/",
    git: "https://github.com/juanserodriguez29/Monster_killer"
  },
  {
    id: 5,
    title: "My favorite films",
    image: cine,
    gif: movies,
    description:
      "Here you can add a title, an image about the movie and rate it from 1 to 5.",
    paths:["JS", "CSS"],
    link: "https://rating-movies-sp.vercel.app/",
    git: "https://github.com/juanserodriguez29/Rating_movies"
  },
];

export {ProjectText};

function ProjectText() {

  return (
    <div >
        {projects.map((projects) => (
          <div key={projects.id} className={classes.proyectos}>
            <div className={`${classes.text} ${projects.id % 2 === 0 ? classes.texteven : " "}`}>
              <h1>{projects.title}</h1>
              <p className={classes.principalp}>{projects.description}
                <div className={`${classes.paths} ${projects.id % 2 === 0 ? classes.pathseven : " "}`}>
                  {projects.paths.map((paths)=>(
                    <li key={projects.id} className={classes.li}>{paths}</li>
                  ))}
                </div>
              </p>
              <div className={`${classes.links} ${projects.id % 2 === 0 ? classes.linkseven : " "}`}>
                <Link
                  href={projects.link}
                  className={classes.link}
                  target="_blank"
                >
                  <svg viewBox="0 0 15 15" fill="#f9572a" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"></path> </svg>
                </Link>
                <Link
                  href={projects.git}
                  className={classes.link}
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#f9572a" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg>
                </Link>
              </div>
            </div>
            <div className={`${classes.images} ${projects.id % 2 === 0 ? classes.imageseven : " "}`}>
              <Image
                className={classes.img}
                src={projects.image}
                alt={projects.title}
              />
              <div className={`${classes.overlay} ${projects.id % 2 === 0 ? classes.overlayeven : " "}`}>
                <Link 
                  href={projects.link}
                  target="_blank">
                    <Image className={classes.overlayimage} src={projects.gif} alt="moviesGif" />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
