import Link from "next/link";
import classes from "./page.module.css"
import ProjectImage from "@/components/project-image";
import {ProjectText} from "@/components/project-text";

export default function projects() {
  return (
    <>
    <header className={classes.header}>
      <h2>Here are <span className={classes.highlight}>my projects</span></h2>
    </header>
      <section className={classes.section}>
        <div><ProjectImage/></div>
        <div><ProjectText/></div>
      </section>
    </>
  );
}
