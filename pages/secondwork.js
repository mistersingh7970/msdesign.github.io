import Head from "next/head";
import styles from "../styles/Secondwork.module.scss";
import Link from "next/link";

export default function Secondwork() {
  return (
    <div className={styles.mainBOX}>
      <div className={styles.firstBOX}>
        <img
          className={styles.landingIMG}
          src="./aroundUS1.jpg"
          alt="IMAGE"
        ></img>
      </div>
      <div className={styles.secondBOX}>
        <div className={styles.textBOX}>
          <div className={styles.uppertxtBOX}>
            <h1 className={styles.UPPERTXT}>brand</h1>
          </div>
          <div className={styles.lowertxtBOX}>
            <h1 className={styles.LOWERTXT}>INFO</h1>
          </div>
        </div>
        <div className={styles.paragraphBOX}>
          <p className={styles.PARAGRAPH}>
            "around us" (AROUND.US) is an upcoming search engine specialized in
            searching activities around you. The idea : you can find things to
            do based on interests, location, weather, age, etc. Around.Us will
            be both a mobile app and a web frontend. Key values are :
            lightweight, fast, reliable, easy, secured, privacy friendly, user
            centric.
          </p>
        </div>
      </div>
      <div className={styles.thirdBOX}>
        <div className={styles.leftBOX}>
          <img className={styles.earthIMG} src="./earth.jpg" alt="earth"></img>
        </div>
        <div className={styles.rightBOX}>
          <div className={styles.textBOX3}>
            <div className={styles.uppertxtBOX3}>
              <h1 className={styles.UPPERTXT3}>new</h1>
            </div>
            <div className={styles.lowertxtBOX3}>
              <h1 className={styles.LOWERTXT3}>DESIGN</h1>
            </div>
          </div>
          <div className={styles.paragraphBOX3}>
            <p className={styles.PARAGRAPH3}>
              for designing new logo design i took my inspiration from the
              universe and planets. because brand name is around.us and it is a
              search engine so for defining all the environment of our
              surrounding i use planet rings and planets in the new symbol.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.fourthBOX}>
        <h1 className={styles.logoHEADING}>New Logo Design & Symbol -</h1>
      </div>
      <div className={styles.fifthBOX}>
        <img
          className={styles.logoIMG}
          src="./around-us-GIF.gif"
          alt="LOGO"
        ></img>
      </div>
      <div className={styles.sixthBOX}>
        <img
          className={styles.logoBRIEF}
          src="./arround.us.LOGO.brief.jpg"
          alt="LOGO.BRIEF"
        ></img>
      </div>
      <div className={styles.seventhBOX}>
        <h1 className={styles.logoHEADING}>Black & White Logo Varients -</h1>
      </div>
      <div className={styles.eighthBOX}>
        <img
          className={styles.logoVARIENTS}
          src="./black.white.LOGO.varients.jpg"
          alt="LOGO.VARIENTS"
        ></img>
      </div>
      <div className={styles.ninthBOX}>
        <div className={styles.headingBOX9}>
          <h1 className={styles.HEADING9}>Logo Branding -</h1>
        </div>
        <div className={styles.imageBOX9}>
          <img
            className={styles.IMAGE9}
            src="./around.us.LANDING.page.jpg"
            alt="LP.preview"
          ></img>
        </div>
      </div>
    </div>
  );
}
