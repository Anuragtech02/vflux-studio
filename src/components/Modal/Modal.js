import { IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Modal.module.css";
import classNames from "classnames";

const Modal = ({ images, image, open }) => {
  const [index, setIndex] = useState(images.indexOf(image));
  const [mainImage, setMainImage] = useState(image.image);
  const [title, setTitle] = useState(image.title);
  // const [isOpen, setIsOpen] = useState(open ? styles.open : styles.notOpen);

  useEffect(() => {
    setMainImage(image.src);
    setTitle(image.title);
  }, [image]);

  const onClickLeft = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex((curr) => curr - 1);
      setMainImage(() => images[index - 1].src);
      setTitle(() => images[index - 1].title);
    }
  };

  const onClickRight = (e) => {
    e.stopPropagation();
    if (index < images.length - 1) {
      setIndex((curr) => curr + 1);
      setMainImage(() => images[index + 1].src);
      setTitle(() => images[index + 1].title);
    }
  };

  const onClickImage = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classNames(styles.container)}>
      <IconButton
        onClick={onClickLeft}
        className={classNames(styles.prevImage, styles.iconBtn)}
      >
        <i className="fas fa-arrow-left"></i>
      </IconButton>
      <div className={styles.imageContainer}>
        {open ? (
          <>
            <LazyLoadImage
              onClick={onClickImage}
              effect="black-and-white"
              src={mainImage}
              alt={title}
            />
            <div className={styles.title}>
              <h2>{title}</h2>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
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
