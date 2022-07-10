import Head from "next/head";
import styles from "../styles/Portfolio.module.scss";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.mainBOX}>
      <div className={styles.firstBOX}>
        <div className={styles.logoBOX}>
          <img className={styles.LOGO} src="./GIF1.gif" alt="LOGO"></img>
        </div>
        <div className={styles.workBOX}>
          <Link href="/firstwork">
            <img
              className={styles.firstWORK}
              src="./purseIMG1.jpg"
              alt="PICTURE"
            ></img>
          </Link>
        </div>
      </div>
      <div className={styles.secondBOX}>
        <div className={styles.textBOX}>
          <div className={styles.headingBOX}>
            <div className={styles.uppertextBOX}>
              <h1 className={styles.UPPERTEXT}>my</h1>
            </div>
            <div className={styles.lowertextBOX}>
              <h1 className={styles.LOWERTEXT}>WORK</h1>
            </div>
          </div>
        </div>
        <div className={styles.workBOX2}>
          <Link href="/secondwork">
            <img
              className={styles.secondWORK}
              src="./planets.jpg"
              alt="PICTURE"
            ></img>
          </Link>
        </div>
      </div>
      <div className={styles.thirdBOX}>
        <div className={styles.linkBOX}>
          <img className={styles.LINK} src="./btn.png" alt="LINK"></img>
        </div>
        <div className={styles.workBOX3}>
          <Link href="/thirdwork">
            <img
              className={styles.thirdWORK}
              src="./camera.jpg"
              alt="PICTURE"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
