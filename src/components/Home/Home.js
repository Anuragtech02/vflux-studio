import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import homeVideo from "../../assets/videos/utalika-1.mp4";
import videPoster from "../../assets/videos/video-poster.webp";
import Portfolio from "../Portfolio/Portfolio";
import { Helmet } from "react-helmet";

const Home = ({ loading, setLoading }) => {
  const [loadFlag, setLoadFlag] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("firstTime") === null) {
      sessionStorage.setItem("firstTime", "yes");
    } else {
      sessionStorage.setItem("firstTime", "no");
    }
  }, []);

  // useEffect(() => {
  //   if (loadFlag) {
  //     if (videoLoaded) setLoading(false);
  //   }
  // }, [loadFlag, videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Vflux Studio | A professional visualization studio</title>
      </Helmet>
      <div className={styles.videoContainer}>
        <div className={styles.overlay}>
          <video
            src={homeVideo}
            type="video/mp4"
            poster={videPoster}
            autoPlay
            muted
            loop
            onLoad={handleVideoLoad}
            preload="none"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <h1 style={{ widht: "0", height: "0", opacity: "0" }}>
        Vflux Studio | A professional visualization studio{" "}
      </h1>
      <div className={styles.portfolio}>
        <h3>Our Works</h3>
        <Portfolio
          loadFlag={loadFlag}
          setLoadFlag={setLoadFlag}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default Home;
