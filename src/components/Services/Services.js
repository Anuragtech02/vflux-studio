import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "./Services.module.css";
import { Banner } from "../../components";
import { Grid } from "@material-ui/core";
import services from "../../assets/static/services/Services";
import WhatWeDoData from "../../assets/static/services/WhatWeDo";
import classNames from "classnames";
import { Helmet } from "react-helmet";

const Services = ({ scrollPosition }) => {
  const [mobileDevice, setMobileDevice] = useState(0);

  useEffect(() => {
    let size = window.innerWidth;
    size >= 1200 ? setMobileDevice(0) : setMobileDevice(1);
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      setMobileDevice(window.innerWidth >= 1200 ? 0 : 1);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Vflux Studio | Services</title>
        <meta
          name="description"
          content="We use cutting-edge tools and techniques for real life rendering to create immersive and detailed images that effectively narrates your unique brand story. "
        />
        <meta property="og:title" content="Vflux Studio | Services" />
      </Helmet>
      {/* <Banner /> */}
      <div className={styles.servicesHeading}>
        <h3>Our Services</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDo}>
            <div className={styles.heading}>
              <h4>What We Do</h4>
              <Grid className={styles.gridContainer} container spacing={6}>
                {WhatWeDoData.map((task) => {
                  return (
                    <Grid
                      key={task}
                      className={styles.task}
                      sm={6}
                      xs={12}
                      item
                      md={4}
                    >
                      <p>• {task}</p>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          {/* <h3>Our Services</h3> */}
          <h1>
            We'll develop <span>for you</span>
          </h1>
          <div className={styles.cards}>
            {services.map((service, i) => {
              return (
                <Grid
                  key={i}
                  container
                  className={classNames(styles.cardRow)}
                  spacing={0}
                >
                  {i % 2 === 0 ? (
                    <LeftSide
                      service={service}
                      scrollPosition={scrollPosition}
                    />
                  ) : !mobileDevice ? (
                    <RightSide
                      service={service}
                      scrollPosition={scrollPosition}
                    />
                  ) : (
                    <LeftSide
                      service={service}
                      scrollPosition={scrollPosition}
                    />
                  )}
                </Grid>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const LeftSide = ({ service, scrollPosition }) => {
  return (
    <>
      <Grid className={styles.mainImage} item md={6} sm={12}>
        <img src={service.image} alt="service" />
      </Grid>
      <Grid className={styles.details} item md={6} sm={12}>
        <div className={classNames(styles.iconTitle, styles.iconLeft)}>
          <i className={service.icon} />
          <h2>{service.title}</h2>
        </div>

        <p>{service.message}</p>
      </Grid>
    </>
  );
};

const RightSide = ({ service, scrollPosition }) => {
  return (
    <>
      <Grid
        className={classNames(styles.details, styles.alignRight)}
        item
        md={6}
        sm={12}
      >
        <div className={classNames(styles.iconTitle, styles.iconRight)}>
          <i className={service.icon} />
          <h2>{service.title}</h2>
        </div>

        <p>{service.message}</p>
      </Grid>
      <Grid className={styles.mainImage} item md={6} sm={12}>
        <img src={service.image} alt="service" />
      </Grid>
    </>
  );
};
