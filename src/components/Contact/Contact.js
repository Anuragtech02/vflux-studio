import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import { Banner } from "../../components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      <Banner />
      <div className={classNames(styles.contactInfo, styles.flexColumn)}>
        <h4>Contact Detail</h4>
        <h1>
          How to <span>get to us</span>
        </h1>
        <p>
          Vflux is a professional visualization studio specializing in
          architectural visualization and offering highly personalized rendering
          services globally.
        </p>
        <p className={styles.contactNo}>
          +91 9876543210 | INFO@VFLUXSTUDIO.COM
        </p>
      </div>
      <Grid container className={styles.mapForm} spacing={4}>
        <Grid item md={6} sm={12}>
          <div className={styles.map}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223993.60806234134!2d76.95126634185982!3d28.692634061031026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1602830143593!5m2!1sen!2sin"
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
            <form>
              <div className={styles.nameEmail}>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={styles.inputField}
                  type="email"
                  placeholder="Your email"
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
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className={styles.inputField}
                  type="text"
                  placeholder="Message"
                  required
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
