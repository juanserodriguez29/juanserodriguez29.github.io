import MainHeader from "@/components/main-header";
import classes from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className={classes.principal}>
        <h1>
          Welcome to <span className={classes.highlight}>my page</span>. Here
          you will find the projects i have done as a FrontEnd developer and of
          course,{" "}
          <span className={classes.highlight}>my contact information</span>.
          <br />
        </h1>
        <h2>Technologies used: </h2>
        <div>
          <Image className={classes.images}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            width={50}
            height={50}
          ></Image>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            width={50}
            height={50}
          ></Image>
        </div>
      </header>
    </>
  );
}
