import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_copy}>
        <h1 className={styles.hero_header}>
          To bringing people <span>together</span>.
        </h1>
        <p className={styles.hero_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className={styles.hero_CTA}>Portfolio</button>
      </div>
      <div className={styles.hero_image}>
        <div className={styles.hero_image1}>
          <Image
            className={styles.image}
            src="/image-a 1.png"
            alt="logo"
            width={461}
            height={220}
          />
        </div>
        <div className={styles.hero_image2}>
          <Image src="/Rectangle 35.png" alt="logo" width={315} height={320} />
        </div>
        <div className={styles.hero_image3}>
          <Image
            className={styles.image}
            src="/image-b 1.png"
            alt="logo"
            width={261}
            height={317}
          />
        </div>
      </div>
      <div className={styles.brand_logo}>
        <Image src="/Group 31.svg" alt="logo" width={281} height={281} />
      </div>
    </div>
  );
};

export default Hero;
