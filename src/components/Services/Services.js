import React from "react";
import styles from "./Services.module.css";
import { Banner } from "../../components";
import { Grid } from "@material-ui/core";

const Services = () => {
  const whatWeDoData = [
    "We use cutting-edge tools and techniques for real life rendering to create immersive and detailed images that effectively narrates your unique brand story. We deliver high-resolution product images that evoke emotions and instil a desire in the onlooker to purchase the product.",
    "We put architectural visualisations to motion using the tool of visual storytelling. Deploying advanced visual editing techniques, sound design and VFX we deliver an all-encompassing representation of your product to add a competitive edge to it.",
    "AR & VR bring a whole new world of experience to the new technologies of unbuilt architecture. We package animation into fully integrated films and take real-time animation to mobile and fully immersive nonlinear experience.",
  ];

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.content}>
        <div className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDo}>
            <div className={styles.heading}>
              <h4>What We Do</h4>
              <Grid className={styles.gridContainer} container spacing={6}>
                {whatWeDoData.map((task) => {
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
          <div className={styles.cards}></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
