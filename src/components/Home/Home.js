import React from "react";
import styles from "./Home.module.css";
import homeVideo from "../../assets/videos/utalika.mp4";
import Portfolio from "../Portfolio/Portfolio";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Vflux Studio | Home</title>
        <meta name="description" content="Vflux Studio Home" />
      </Helmet>
      <div className={styles.videoContainer}>
        <div className={styles.overlay}>
          <video src={homeVideo} type="video/mp4" autoPlay muted loop />
        </div>
      </div>
      <div className={styles.portfolio}>
        <h3>Our Works</h3>
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
