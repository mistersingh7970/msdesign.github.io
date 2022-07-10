import Head from "next/head";
import styles from "../styles/About.module.scss";
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
        <div className={styles.leftBOX}>
          <img className={styles.IMAGE} src="./myPIC.jpg" alt="MY-PIC"></img>
        </div>
        <div className={styles.rightBOX}>
          <div className={styles.firstCONTAINER}>
            <div className={styles.logoBOX}>
              <img className={styles.LOGO} src="./GIF2.gif" alt="LOGO"></img>
            </div>
            <div className={styles.linkBOX}>
              <Link href="/portfolio">
                <img className={styles.LINK} src="./btn2.png" alt="LINK"></img>
              </Link>
            </div>
          </div>
          <div className={styles.secondCONTAINER}>
            <div className={styles.textBOX}>
              <div className={styles.headingBOX}>
                <div className={styles.uppertextBOX}>
                  <h1 className={styles.UPPERTEXT}>about</h1>
                </div>
                <div className={styles.lowertextBOX}>
                  <h1 className={styles.LOWERTEXT}>ME</h1>
                </div>
              </div>
              <div className={styles.paragraphBOX}>
                <p className={styles.PARAGRAPH}>
                  Hi, my name is tanvir singh and I am from Punjab. I work under
                  my brand name mister singh (MR. singh). I am a graphic
                  designer, web developer, web designer, brand identity
                  designer, bussiness advisor, marketing expert, logo design
                  expert, and animator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
