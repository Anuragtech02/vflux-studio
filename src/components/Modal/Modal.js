import { IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Modal.module.css";
import classNames from "classnames";

const Modal = ({ images, image, open }) => {
  const [index, setIndex] = useState(images.indexOf(image));
  const [mainImage, setMainImage] = useState(image.image);
  const [title, setTitle] = useState(image.category);
  const [isOpen, setIsOpen] = useState(open ? styles.open : styles.notOpen);

  const onClickLeft = () => {
    if (index > 0) {
      setIndex((curr) => curr - 1);
      setMainImage(() => images[index - 1].image);
      setTitle(() => images[index - 1].category);
    }
  };

  const onClickRight = () => {
    if (index < images.length - 1) {
      setIndex((curr) => curr + 1);
      setMainImage(() => images[index + 1].image);
      setTitle(() => images[index + 1].category);
    }
  };

  return (
    <div
      onClick={() => setIsOpen(open ? styles.notOpen : styles.open)}
      className={classNames(styles.container, isOpen)}
    >
      <IconButton
        onClick={onClickLeft}
        className={classNames(styles.prevImage, styles.iconBtn)}
      >
        <i className="fas fa-arrow-left"></i>
      </IconButton>
      <div className={styles.imageContainer}>
        <LazyLoadImage effect="black-and-white" src={mainImage} alt={title} />
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </div>
      <IconButton
        onClick={onClickRight}
        className={classNames(styles.nextImage, styles.iconBtn)}
      >
        <i className="fas fa-arrow-right"></i>
      </IconButton>
    </div>
  );
};

export default Modal;
