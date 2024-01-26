import classes from "./main-header.module.css";
import logoImg from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link href="#principal" className={classes.logo}>
          <Image src={logoImg} alt="My blog" priority></Image>
          Sebastian Prado
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="#projects">My Projects</NavLink>
            </li>
            <li>
              <NavLink href="#about">About me</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
