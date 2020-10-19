import { IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Modal.module.css";
import classNames from "classnames";

const Modal = ({ images, image, open }) => {
  const [index, setIndex] = useState(images.indexOf(image));
  const [mainImage, setMainImage] = useState(image.original);
  const [title, setTitle] = useState(image.title);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setMainImage(image.original);
    setTitle(image.title);
  }, [image]);

  const onClickLeft = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex((curr) => curr - 1);
      setMainImage(() => images[index - 1].original);
      setTitle(() => images[index - 1].title);
    }
  };

  const onClickRight = (e) => {
    e.stopPropagation();
    if (index < images.length - 1) {
      setIndex((curr) => curr + 1);
      setMainImage(() => images[index + 1].original);
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
        {image.category === "animation" ? (
          open ? (
            <iframe
              onClick={onClickImage}
              title="animation"
              style={{ opacity: loading ? "0" : "1" }}
              onLoad={() => setLoading(false)}
              src={mainImage}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : null
        ) : (
          <LazyLoadImage
            onClick={onClickImage}
            effect="black-and-white"
            onLoad={() => setLoading(false)}
            src={mainImage}
            alt={title}
            style={{ opacity: loading ? "0" : "1" }}
          />
        )}
        <div className={styles.title} style={{ opacity: loading ? "0" : "1" }}>
          <h2>{title}</h2>
        </div>
        <div
          className={styles.loadingText}
          style={{ opacity: loading ? "1" : "0" }}
        >
          Loading...
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
