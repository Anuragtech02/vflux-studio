import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo/vflux-logo.png";
import classNames from "classnames";

const Navbar = ({ history }) => {
  const [menuClicked, setMenuClicked] = useState(styles.nothing);
  const [sidebar, setSidebar] = useState(styles.inactive);
  const [active, setActive] = useState({
    home: styles.nothing,
    about: styles.nothing,
    services: styles.nothing,
    contact: styles.nothing,
  });

  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        setActive({ home: styles.active });
        break;
      case "/about":
        setActive({ about: styles.active });
        break;
      case "/our-services":
        setActive({ services: styles.active });
        break;
      case "/contact":
        setActive({ contact: styles.active });
        break;
      default:
        setActive({
          home: styles.nothing,
          about: styles.nothing,
          services: styles.nothing,
          contact: styles.nothing,
        });
        break;
    }
  }, [history.location.pathname]);

  const handleBurgerClick = () => {
    if (menuClicked === styles.nothing) {
      setMenuClicked(styles.clicked);
      setSidebar(styles.sidebar);
      const navLinks = document.querySelectorAll("#sidebar li");
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
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/"
        >
          <li className={classNames(styles.navLink, active.home)}>Home</li>
        </Link>
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/about"
        >
          <li className={classNames(styles.navLink, active.about)}>About Us</li>
        </Link>
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/our-services"
        >
          <li className={classNames(styles.navLink, active.services)}>
            Our Services
          </li>
        </Link>
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/contact"
        >
          <li className={classNames(styles.navLink, active.contact)}>
            Contact Us
          </li>
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
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/"
        >
          <li className={classNames(styles.navLink, active.home)}>Home</li>
        </Link>
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/about"
        >
          <li className={classNames(styles.navLink, active.about)}>About Us</li>
        </Link>
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/our-services"
        >
          <li className={classNames(styles.navLink, active.services)}>
            Our Services
          </li>
        </Link>
        <Link
          className={styles.noDecoration}
          onClick={() => {
            setMenuClicked(styles.nothing);
            setSidebar(styles.inactive);
          }}
          to="/contact"
        >
          <li className={classNames(styles.navLink, active.contact)}>
            Contact Us
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
