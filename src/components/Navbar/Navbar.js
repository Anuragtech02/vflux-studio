import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/vflux-logo.png";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.noDecoration} to="/">
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <ul className={classNames(styles.navLinks, styles.flexRow)}>
        <Link className={styles.noDecoration} to="/">
          <li className={styles.navLink}>Home</li>
        </Link>
        <Link className={styles.noDecoration} to="/about">
          <li className={styles.navLink}>About Us</li>
        </Link>
        <Link className={styles.noDecoration} to="/our-services">
          <li className={styles.navLink}>Our Services</li>
        </Link>
        <Link className={styles.noDecoration} to="/contact">
          <li className={styles.navLink}>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
