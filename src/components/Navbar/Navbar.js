import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/vflux-logo.png";
import classNames from "classnames";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(styles.nothing);
  const [sidebar, setSidebar] = useState(styles.inactive);

  const handleBurgerClick = () => {
    if (menuClicked === styles.nothing) {
      setMenuClicked(styles.clicked);
      setSidebar(styles.sidebar);
      const navLinks = document.querySelectorAll("#sidebar li");
      console.log(navLinks);
      navLinks.forEach((link, i) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `${styles.navLinkFade} 0.3s ease forwards ${
            i / 5
          }s`;
        }
      });
    } else {
      setMenuClicked(styles.nothing);
      setSidebar(styles.inactive);
    }
  };

  return (
    <nav className={styles.container}>
      <Link className={styles.noDecoration} to="/">
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <ul
        className={classNames(
          styles.navLinks,
          styles.flexRow,
          styles.largeDevice
        )}
      >
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
      <div
        onClick={handleBurgerClick}
        className={classNames(styles.ham, styles.mobileDevice, menuClicked)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul
        id="sidebar"
        className={classNames(
          styles.navLinks,
          styles.mobileDevice,
          styles.flexColumn,
          styles.navLinksMobile,
          sidebar
        )}
      >
        <li className={styles.navLink}>
          <img src={logo} alt="logo" />
        </li>
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
