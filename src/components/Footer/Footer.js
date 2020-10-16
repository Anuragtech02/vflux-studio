import React from "react";
import styles from "./Footer.module.css";
import classNames from "classnames";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.social, styles.flexRow)}>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-behance"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <div className={styles.copyright}>
        <p>© 2020 Unified Consulting. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
