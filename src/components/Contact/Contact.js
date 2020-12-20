import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://vfluxstudio.com/api/contact.php",
      headers: { "content-type": "application/json" },
      data: {
        name,
        email,
        subject,
        message,
      },
    })
      .then((result) => {
        setMailSent(result.data.sent);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Vflux Studio | Contact</title>
        <meta name="description" content="Vflux Studio Contact" />
      </Helmet>
      <div className={styles.bannerCont}>{/* <Banner /> */}</div>
      <div className={classNames(styles.contactInfo, styles.flexColumn)}>
        <h4>Contact Details</h4>
        <h1>
          How to <span>get to us</span>
        </h1>
        <p>
          Vflux is a professional visualization studio specializing in
          architectural visualization and offering highly personalized rendering
          services globally.
        </p>
        <p className={styles.contactNo}>
          +91 7439709464 | CONNECT@VFLUXSTUDIO.COM
        </p>
      </div>
      <Grid container className={styles.mapForm} spacing={4}>
        <Grid item md={6} sm={12}>
          <div className={styles.map}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.6765131883176!2d77.19892361551723!3d28.51937879594317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fb45133943%3A0xd19902f9cbebbd7a!2s32%2C%20Lane%20Number%202%2C%20near%20Saket%2C%20Saidulajab%2C%20Saiyad%20Ul%20Ajaib%20Village%2C%20Sainik%20Farm%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1606874588126!5m2!1sen!2sin"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={styles.contactForm}>
            <form onSubmit={onSubmit} action="#">
              <div className={styles.nameEmail}>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={styles.inputField}
                  type="email"
                  placeholder="Your email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.subMessage}>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className={styles.inputField}
                  type="text"
                  placeholder="Message"
                  required
                  name="message"
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {mailSent || error ? (
                <h3>{mailSent ? "Thank you for contact us :)" : error}</h3>
              ) : null}
              <div className={styles.submitBtn}>
                <button name="submit" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
