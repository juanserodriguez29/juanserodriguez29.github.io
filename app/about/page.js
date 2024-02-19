import Link from "next/link";
import classes from "./page.module.css";
import perfil from "@/assets/img/Perfil-color.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <div className={classes.principal}>
      <header className={classes.header}>
          <h2>
            A little bit <span className={classes.highlight}>about me</span>
          </h2>
      </header>
      <section className={classes.section}>
        <div className={classes.firstDiv}>
          <div className={classes.block}>
            <Image className={classes.photo} src={perfil} alt=""></Image>
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
              <svg className={classes.gitHub} xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" x="0px" y="0px"  viewBox="12 12 50 50">
                <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
              </svg>
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
              My name is Sebastián, if you are here I suppose you have been
              interested in some of my projects or simply to know a little more
              about who is the author of this Blog.
              <br></br>
              <br></br>I am an environmental engineer, I love the world of
              programming and I have taken some Javascript, React, Nextjs and VBA
              courses, I love soccer and my challenge is to start developing my
              professional future in the tech area.
              <br></br>
              <br></br>
              If you have any questions, my social networks appear at the top so
              you can contact me, I will be very attentive!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
