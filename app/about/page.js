import Link from "next/link";
import classes from "./page.module.css";
import perfil from "@/assets/img/Perfil-color.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.column}>
          <h2>
            A little bit <span className={classes.highlight}>about me</span>
          </h2>
          <br/>
          <br/>
        </div>
      </header>
      <section className={classes.section}>
        <div className={classes.firstDiv}>
          <div className={classes.block}>
            <Image className={classes.photo} src={perfil} alt="" width={270} height={310}></Image>
            <div className={classes.overlay}>
              <div className={classes.text2}><a href="mailto:juanserodriguez29@hotmail.com">Contact me</a></div>
            </div>
          </div>
        </div>
        <div className={classes.secondDiv}>
          <div className={classes.socialLinks}>
            <Link
              style={{ marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/juan-sebastian-prado-rodriguez-601834137/"
            >
              <Image
                className={classes.linkedIn}
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt=""
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link
              style={{ marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/juanserodriguez29"
            >
              <Image
                className={classes.gitHub}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/juanserodriguez29/"
            >
              <Image
                className={classes.instagram}
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
          <div className={classes.text}>
            <p>
              My name is Sebastián, if you are here i suppose you have been
              interested in some of my projects or simply to know a little more
              about who is the author of this Blog.
              <br></br>
              <br></br>I am an environmental engineer, i love the world of
              programming and i have taken some Javascript, React and VBA
              courses, i love soccer and my challenge is to start developing my
              professional future in the tech area.
              <br></br>
              <br></br>
              If you have any questions, my social networks appear at the top so
              you can contact me, i will be very attentive!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
