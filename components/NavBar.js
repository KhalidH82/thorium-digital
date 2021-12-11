import React from "react";
import Image from "next/image";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/icon.png" alt="logo" width={85} height={74} />
        </div>
        <div className={styles.links}>
          <div>
            <ul className={styles.top_links}>
              <li>
                <Image
                  src="/Instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <Image
                  src="/Facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <Image
                  src="/Twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <Image src="/Line1.png" alt="line" width={23} height={5} />
              </li>
              <li>Log In</li>
              <li>
                <Image
                  src="/Rectangle 33.svg"
                  alt="logo"
                  width={11}
                  height={11}
                />
              </li>
            </ul>
          </div>
          <div>
            <ul className={styles.bottom_links}>
              <li>Home</li>
              <li>Our Portfolio</li>
              <li>Suppliers</li>
              <li>Careers</li>
              <li>Our Causes</li>
              <li>News</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
