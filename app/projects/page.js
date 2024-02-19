'use client'

import classes from "./page.module.css"
import {ProjectText} from "@/components/project-text";

export default function Projects() {

  return (
    <div className={classes.principal}>
    <header className={classes.header}>
      <h2><span className={classes.highlight}>Projects </span>I have developed</h2>
    </header>

    <section className={classes.section}>
      <div className={classes.text}><ProjectText/></div>
    </section>
    </div>
  );
}
