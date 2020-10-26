import React from "react";
import styles from "./Footer.module.css";
import classNames from "classnames";

const Footer = () => {
  const onClickSocial = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.copyright}>
        <p>© 2020 Vflux Studio. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
