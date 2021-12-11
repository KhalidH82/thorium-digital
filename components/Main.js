import React from "react";
import Image from "next/image";
import styles from "../styles/Main.module.scss";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_image}>
          <Image src="/Group 26.png" alt="logo" width={567} height={539} />
        </div>
        <div className={styles.main_copy}>
          <h1 className={styles.main_header}>
            Knowing the numbers is never <span>enough</span>.
          </h1>
          <p className="main_copy">
            It's about understanding the opportunities and challenges behind the
            numbers — and planning for a stronger future. What's the right
            product selection for your customers? Which tools and information
            could make your business even more successful? At Southern Glazer's,
            we tailor our services for each and every one of our customers.
            Because we know that when we come together, there's always something
            to celebrate.
          </p>
        </div>
      </div>
      <div className={styles.card_container}>
        <Card
          image="/Group 6.png"
          title="Customers"
          subtitle="See our portfolio"
        />
        <Card image="/Gift.png" title="Suppliers" subtitle="Work with us" />
        <Card image="/setting.png" title="Team" subtitle="Sign in or apply" />
      </div>
    </>
  );
};

export default Main;
