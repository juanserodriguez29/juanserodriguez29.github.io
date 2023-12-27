import Link from "next/link";
import classes from "./page.module.css";
import perfil from "@/assets/img/Perfil-color.jpeg";
import Image from "next/image";

export default function about() {
  return (
    <>
      <header className={classes.header}>
        <h2>
          He<span className={classes.highlight}>llo</span>
        </h2>
      </header>
      <section className={classes.section}>
        <div>
          <div className={classes.block}>
            <Image
              className={classes.photo}
              src={perfil}
              width={270}
              height={310}
            ></Image>
          </div>
        </div>
        <div className={classes.text}>
          <div style={{justifyContent: 'space-between'}}>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juan-sebastian-prado-rodriguez-601834137/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/juanserodriguez29">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juanserodriguez29/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
          <p>
            My name is Sebastián, if you are here I suppose you have been
            interested in some of my projects or simply to know a little more
            about who is the author of this Blog.
            <br></br>
            <br></br>I am an environmental engineer, I love the world of
            programming and I have taken some Python, Javascript and VBA
            courses, I love soccer and my challenge is to start developing my
            professional future in the area of programming.
            <br></br>
            <br></br>
            If you have any questions, my social networks appear at the top so
            you can contact me, i will be very attentive!
          </p>
        </div>
      </section>
    </>
  );
}
