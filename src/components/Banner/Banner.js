import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <h1>WE MAKE CREATIVES & DRAMA.</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
