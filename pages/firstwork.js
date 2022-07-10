import Head from "next/head";
import styles from "../styles/Firstwork.module.scss";
import Link from "next/link";

export default function Firstwork() {
  return (
    <div className={styles.mainBOX}>
      <div className={styles.firstCONTAINER}>
        <div className={styles.imageBOX1}>
          <img
            className={styles.image1}
            src="./whiteBAG.jpg"
            alt="PICTURE"
          ></img>
        </div>
        <div className={styles.contentBOX1}>
          <div className={styles.innerBOX1}>
            <div className={styles.headerBOX1}>
              <div className={styles.logoBOX1}>
                <img className={styles.LOGO1} src="./GIF1.gif" alt="LOGO"></img>
              </div>
              <div className={styles.linkBOX1}>
                <img className={styles.LINK1} src="./btn2.png"></img>
              </div>
            </div>
            <div className={styles.textBOX1}>
              <div className={styles.upperheadingBOX1}>
                <h1 className={styles.UPPERTEXT1}>brand</h1>
              </div>
              <div className={styles.lowerheadingBOX1}>
                <h1 className={styles.LOWERTEXT1}>INFO</h1>
              </div>
            </div>
            <div className={styles.paragraphBOX1}>
              <p className={styles.PARAGRAPH1}>
                Tsoie7 is a women handbag brand. Client approached me for
                totally new rebranding. He wanted a new logo design, new colors,
                and new fonts for his brand. He told me to design a new brand
                identity that looks simple and clean yet luxurious.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondCONTAINER}>
        <div className={styles.textBOX2}>
          <div className={styles.upperheadingBOX2}>
            <h1 className={styles.UPPERTEXT2}>new logo</h1>
          </div>
          <div className={styles.lowerheadingBOX2}>
            <h1 className={styles.LOWERTEXT2}>DESIGN</h1>
          </div>
        </div>
        <div className={styles.paragraphBOX2}>
          <p className={styles.PARAGRAPH2}>
            I designed a wordmark logo design for the brand. I used a geometric
            shaped font because it adds a simplicity and strongness in the
            identity. Golden color adds more sophistication in the design.
          </p>
        </div>
        <div className={styles.imageBOX2}>
          <img className={styles.image2} src="./TsoieLOGO.png"></img>
        </div>
      </div>

      <div className={styles.thirdCONTAINER}>
        <div className={styles.contentBOX3}>
          <div className={styles.textBOX3}>
            <div className={styles.upperheadingBOX3}>
              <h1 className={styles.UPPERTEXT3}>logo</h1>
            </div>
            <div className={styles.lowerheadingBOX3}>
              <h1 className={styles.LOWERTEXT3}>BRANDING</h1>
            </div>
          </div>
          <div className={styles.paragraphBOX3}>
            <p className={styles.PARAGRAPH3}>
              Here I show that how logo will look on brands product. Both symbol
              and wordmark looks fabulous on handbags. Brand identity looks
              simple and clean yet luxurious.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.fourthCONTAINER}>
        <div className={styles.image4BOX1}>
          <img
            className={styles.IMAGE4}
            src="./tsoieBRANDING1.jpg"
            alt="PICTURE"
          ></img>
        </div>

        <div className={styles.image4BOX2}>
          <img
            className={styles.IMAGE4second}
            src="./tsoieBRANDING2.jpg"
            alt="PICTURE"
          ></img>
        </div>
      </div>
    </div>
  );
}
