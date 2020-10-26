import React from "react";
import styles from "./About.module.css";
import { Banner } from "../../components";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";

const About = () => {
  const data = [
    {
      title: "Our Focus",
      message:
        "Through a myriad of styles and techniques we are focused on making the art of rendering a cohesive and powerful creative force for a more compelling and enriching end-user experience.",
    },
    {
      title: "Art of Rendering",
      message:
        "We approach unbuilt architecture through visual storytelling that cohesively narrates the product vision.",
    },
    {
      title: "Our Consultation",
      message:
        "Through a series of consultation, we understand the client needs and requirements and uncover the product potential by bringing together the indispensable elements of visual design for creating the maximum impact.",
    },
    {
      title: "Our Work",
      message:
        "Our work is based on extensive research and development to enable creative decision-making. We design and project-manage, while ensuring all the services are meaningfully enmeshed with each stage of the process.",
    },
  ];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Vflux Studio | About</title>
        <meta name="description" content="Vflux Studio About" />
      </Helmet>
      <div style={{ marginTop: "50px" }}>
        <Banner />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>About Us</h3>
          <h1>
            We are{" "}
            <span>
              <span>V</span>flux
            </span>
          </h1>
          <p>
            Vflux is a professional visualization studio specializing in
            architectural visualization and offering highly personalized
            rendering services globally. Our creative vision as a team is trying
            to envision a new era of design by combining the best global design
            practices with lifelike experience to capture the essence of the
            product that is being.
          </p>
        </div>
        <div className={styles.quote}>
          <h1>Imagine, And it shall be. There are no limits.</h1>
          <p>-Evelyn Skye</p>
        </div>
        <Grid container spacing={4} className={styles.services}>
          {data.map((service) => {
            return (
              <Grid
                key={service.title}
                item
                md={6}
                sm={12}
                className={styles.service}
              >
                <h2>{service.title}</h2>
                <p>{service.message}</p>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default About;
