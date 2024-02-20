'use client'

import { useEffect, useState } from "react";
import classes from "./main-header.module.css";
import logoImg from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolling(scrollPosition > 110);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${classes.header} ${scrolling ? classes.smallHeader : ""}`}>
        <div>
        <Link href="#principal" className={classes.logo}>
          <Image width={48} height={48} className={classes.image} src={logoImg} alt="My blog" priority></Image>
          Sebastian Prado
        </Link>
        </div>
        <div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="#about">About me</NavLink>
            </li>
            <li>
              <NavLink href="#projects">My Projects</NavLink>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    </>
  );
}
