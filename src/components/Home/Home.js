import React from "react";
import styles from "./Home.module.css";
import homeVideo from "../../assets/videos/utalika.mp4";
import Portfolio from "../Portfolio/Portfolio";
import { Helmet } from "react-helmet";

const Home = ({ loading, setLoading }) => {
  React.useEffect(() => {
    if (sessionStorage.getItem("firstTime") === null) {
      sessionStorage.setItem("firstTime", "yes");
    } else {
      sessionStorage.setItem("firstTime", "no");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Vflux Studio | A professional visualization studio</title>
      </Helmet>
      <div className={styles.videoContainer}>
        <div className={styles.overlay}>
          <video src={homeVideo} type="video/mp4" autoPlay muted loop />
        </div>
      </div>
      <h1 style={{ widht: "0", height: "0", opacity: "0" }}>
        Vflux Studio | A professional visualization studio{" "}
      </h1>
      <div className={styles.portfolio}>
        <h3>Our Works</h3>
        <Portfolio loading={loading} setLoading={setLoading} />
      </div>
    </div>
  );
};

export default Home;
