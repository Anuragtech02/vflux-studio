import { IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Modal.module.css";

const Modal = ({ images, image, title }) => {
  const [index, setIndex] = useState(0);
  const [mainImage, setMainImage] = useState(image);
  useEffect(() => {
    setIndex(images.indexOf(image));
  }, [image, images]);

  const onClickLeft = () => {
    if (index > 0) {
      setIndex((curr) => curr - 1);
      setMainImage(index);
    }
  };

  const onClickRight = () => {
    if (index > 0) {
      setIndex((curr) => curr + 1);
      setMainImage(index);
    }
  };

  return (
    <div className={styles.container}>
      <IconButton onClick={onClickLeft} className={styles.prevImage}>
        <i className="fas fa-arrow-left"></i>
      </IconButton>
      <div className={styles.imageContainer}>
        <LazyLoadImage effect="black-and-white" src={mainImage} alt={title} />
        <div className={styles.title}>{title}</div>
      </div>
      <IconButton onClick={onClickRight} className={styles.nextImage}>
        <i className="fas fa-arrow-right"></i>
      </IconButton>
    </div>
  );
};

export default Modal;
