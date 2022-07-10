import Head from "next/head";
import styles from "../styles/Thirdwork.module.scss";
import Link from "next/link";

export default function Secondwork() {
  return (
    <div className={styles.mainBOX}>
      <div className={styles.firstBOX}>
        <div className={styles.leftBOX}>
          <img className={styles.droneIMG} src="./drone.jpg" alt="DRONE"></img>
        </div>
        <div className={styles.rightBOX}>
          <div className={styles.textBOX}>
            <div className={styles.headingBOX}>
              <div className={styles.upperheadingBOX}>
                <h1 className={styles.UPPERTXT}>brand</h1>
              </div>
              <div className={styles.lowerheadingBOX}>
                <h1 className={styles.LOWERTXT}>INFO</h1>
              </div>
            </div>
            <div className={styles.paragraphBOX}>
              <p className={styles.paragraph}>
                Aerial photography company based just outside of Yellowstone
                National Park. Our focus is to bring the natural beauty,
                wildlife and epic landscapes to folks who cannot experience it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondBOX}>
        <div className={styles.textBOX2}>
          <div className={styles.headingBOX2}>
            <div className={styles.upperheadingBOX2}>
              <h1 className={styles.UPPERTXT2}>new</h1>
            </div>
            <div className={styles.lowerheadingBOX2}>
              <h1 className={styles.LOWERTXT2}>DESIGN</h1>
            </div>
          </div>
          <div className={styles.paragraphBOX2}>
            <p className={styles.paragraph2}>
              because drones are a new and futuristic technology so I use
              futuristic and minimal brand identity for this brand. I took my
              ispiration from the eagles. I used a eagle symbol to represent the
              whole brand because it eagles are known for their eye sight and
              power. so it makes the whole brand identity powerful and creative.
            </p>
          </div>
        </div>
        <div className={styles.imageBOX2}>
          <img className={styles.birdIMG2} src="./bird.jpg" alt="bird"></img>
        </div>
      </div>
      <div className={styles.thirdBOX}>
        <div className={styles.headingBOX3}>
          <h1 className={styles.heading3}>NEW LOGO DESIGN-</h1>
        </div>
        <div className={styles.logoBOX3}>
          <img className={styles.logoIMG} src="./PVAlogo.png" alt="LOGO"></img>
        </div>
      </div>
      <div className={styles.fourthBOX}>
        <div className={styles.logobriefBOX4}>
          <h1 className={styles.logobriefHEADING}>LOGO DESIGN BRIEF-</h1>
        </div>
        <div className={styles.logobriefimgBOX4}>
          <img
            className={styles.logobriefIMG}
            src="./PVAlogobrief.png"
            alt="LOGO"
          ></img>
        </div>
      </div>
      <div className={styles.fifthBOX}>
        <div className>

        </div>
      </div>
    </div>
  );
}
