import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.scss";
const Card = ({ image, title, subtitle }) => {
  return (
    <div className={styles.card_container}>
      <Image src={image} alt="logo" width={172} height={172} />
      <h2>{title}</h2>
      <div className={styles.card_content}>
        <p>{subtitle}</p>
        <Image src="/Rectangle 43.svg" alt="logo" width={8} height={16} />
      </div>
    </div>
  );
};

export default Card;
