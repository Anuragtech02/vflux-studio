import React, { useState, useEffect, useLayoutEffect } from "react";
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
    const updateHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    if (window.innerWidth <= 800) updateHeight();
  }, [history.location.pathname]);

  useLayoutEffect(() => {
    const updateHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

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
      const navLinks = document.querySelectorAll("#sidebar li");
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
    }
  };

  const onClickSocial = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
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
          className={classNames(styles.noDecoration, styles.mgHome)}
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
        <li className={classNames(styles.navLink)}>
          <div className={classNames(styles.social, styles.flexRow)}>
            <i
              className="fab fa-facebook-square"
              onClick={() => {
                onClickSocial(
                  "https://www.facebook.com/Vfluxstudio-102258501673102/?modal=admin_todo_tour"
                );
              }}
            ></i>
            <i
              className="fab fa-behance"
              onClick={() => {
                onClickSocial("https://behance.net/vfluxstudio");
              }}
            ></i>
            <i
              className="fab fa-youtube"
              onClick={() => {
                onClickSocial("https://www.youtube.com/");
              }}
            ></i>
            <i
              className="fab fa-instagram"
              onClick={() => {
                onClickSocial("https://instagram.com/");
              }}
            ></i>
            <i
              className="fab fa-linkedin-in"
              onClick={() => {
                onClickSocial("https://linkedin.com/");
              }}
            ></i>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
