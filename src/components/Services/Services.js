import React from "react";
import styles from "./Services.module.css";
import { Banner } from "../../components";
import { Grid } from "@material-ui/core";
import services from "../../assets/static/services/Services";
import WhatWeDoData from "../../assets/static/services/WhatWeDo";
import classNames from "classnames";

const Services = () => {
  return (
    <div className={styles.container}>
      <Banner />
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
          <h3>Our Services</h3>
          <h1>
            We'll develop <span>for you</span>
          </h1>
          <div className={styles.cards}>
            {services.map((service, i) => {
              return (
                <>
                  <Grid
                    key={i}
                    container
                    className={classNames(styles.cardRow, styles.largeDevice)}
                    spacing={0}
                  >
                    {i % 2 === 0 ? (
                      <LeftSide service={service} />
                    ) : (
                      <RightSide service={service} />
                    )}
                  </Grid>
                  <Grid
                    key={i}
                    container
                    className={classNames(styles.cardRow, styles.mobileDevice)}
                    spacing={0}
                  >
                    <LeftSide service={service} />
                  </Grid>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const LeftSide = ({ service }) => {
  return (
    <>
      <Grid className={styles.mainImage} item md={6} sm={12}>
        <img src={service.image} alt="service" />
      </Grid>
      <Grid className={styles.details} item md={6} sm={12}>
        <i className={service.icon} />
        <h2>{service.title}</h2>
        <p>{service.message}</p>
      </Grid>
    </>
  );
};

const RightSide = ({ service }) => {
  return (
    <>
      <Grid
        className={classNames(styles.details, styles.alignRight)}
        item
        md={6}
        sm={12}
      >
        <i className={service.icon} />
        <h2>{service.title}</h2>
        <p>{service.message}</p>
      </Grid>
      <Grid className={styles.mainImage} item md={6} sm={12}>
        <img src={service.image} alt="service" />
      </Grid>
    </>
  );
};
