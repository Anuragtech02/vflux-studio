import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo/vflux-logo.png";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={classNames(styles.navLinks, styles.flexRow)}>
        <li className={styles.navLink}>Home</li>
        <li className={styles.navLink}>About Us</li>
        <li className={styles.navLink}>Our Services</li>
        <li className={styles.navLink}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
