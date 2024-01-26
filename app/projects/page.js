'use client'

import classes from "./page.module.css"
import ProjectImage from "@/components/project-image";
import {ProjectText} from "@/components/project-text";
import { useState } from "react";

export default function Projects() {
const [initialIndex, setInitialIndex] = useState(0)

const posIndex = () => {
  setInitialIndex(posIndex => posIndex + 1 < 5 ? posIndex + 1 : 0)
}

const prevIndex = ()=>{
  setInitialIndex(prevIndex => prevIndex - 1 >= 0 ? prevIndex - 1 : 4)
}


  return (
    <>
    <header className={classes.header}>
      <h2><span className={classes.highlight}>Projects </span>i have developed</h2>
    </header>
      <section className={classes.section}>
        <div className={classes.image}><ProjectImage initialIndex={initialIndex}/></div>
        <div className={classes.text}><ProjectText initialIndex={initialIndex}/></div>
        <div className={classes.buttons}>
          <a className={classes.firstButton} onClick={()=>prevIndex()}><svg className={classes.rightArrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f9572a" stroke="#f9572a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg></a>
          <a className={classes.secondButton} onClick={()=>posIndex()}><svg className={classes.leftArrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f9572a" stroke="#f9572a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg></a>
        </div>
      </section>

      
    </>
  );
}
