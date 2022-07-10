import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.mainBOX}>
      <Head>
        <title>MISTER SINGH</title>
        <meta name="description" content="DESIGN STUDIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainBOX}>
        <div className={styles.firstCONTAINER}>
          <div className={styles.logoBOX}>
            <img className={styles.LOGO} src="./GIF1.gif" alt="LOGO"></img>
          </div>
          <div className={styles.linkBOX}>
            <Link href="/about">
              <img className={styles.LINK} src="./btn.png" alt="BUTTON"></img>
            </Link>
          </div>
        </div>
        <div className={styles.secondCONTAINER}>
          <div className={styles.textBOX}>
            <div className={styles.headingBOX}>
              <div className={styles.uppertextBOX}>
                <h1 className={styles.UPPERTEXT}>welcome in the</h1>
              </div>
              <div className={styles.lowertextBOX}>
                <h1 className={styles.LOWERTEXT}>GAME OF BRANDS</h1>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.backgroundIMG}
          src="./KING.png"
          alt="BACKGROUND"
        ></img>
      </div>
    </div>
  );
}
