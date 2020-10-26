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
    image.category === "stills" || image.category === "animation"
      ? setMainImage(image.original)
      : setMainImage(image.modal);

    // setMainImage(image.original);
    setTitle(image.title);
    setIndex(images.indexOf(image));
  }, [image, images]);

  const onClickLeft = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex((curr) => curr - 1);
      if (images[index - 1].category === "stills") {
        setMainImage(() => images[index - 1].original);
      } else if (images[index - 1].category === "animation") {
        setMainImage(() => images[index - 1].src);
      } else if (images[index - 1].category === "vr") {
        setMainImage(() => images[index - 1].modal);
      }
      // images[index - 1].category === "stills"
      //   ? setMainImage(() => images[index - 1].original)
      //   : setMainImage(() => images[index - 1].modal);
      // setMainImage(() => images[index - 1].original);
      setTitle(() => images[index - 1].title);
    }
  };

  const onClickRight = (e) => {
    e.stopPropagation();
    if (index < images.length - 1) {
      setIndex((curr) => curr + 1);
      if (images[index + 1].category === "stills") {
        setMainImage(() => images[index + 1].original);
      } else if (images[index + 1].category === "animation") {
        setMainImage(() => images[index + 1].src);
      } else if (images[index + 1].category === "vr") {
        setMainImage(() => images[index + 1].modal);
      }
      // images[index + 1].category === "stills"
      //   ? setMainImage(() => images[index + 1].original)
      //   : setMainImage(() => images[index + 1].modal);
      // setMainImage(() => images[index + 1].original);
      setTitle(() => images[index + 1].title);
    }
  };

  const onClickImage = (e) => {
    e.stopPropagation();
    if (images[index].category === "vr") {
      const a = document.createElement("a");
      a.href = images[index].original;
      a.target = "_blank";
      a.click();
    }
  };

  return (
    <div className={classNames(styles.container)}>
      <IconButton
        onClick={onClickLeft}
        style={{ display: image.category === "animation" ? "none" : "block" }}
        className={classNames(styles.prevImage, styles.iconBtn)}
      >
        <i className="fas fa-arrow-left"></i>
      </IconButton>
      <div className={styles.imageContainer}>
        <IconButton className={styles.closeBtn}>
          <i className="fas fa-times"></i>
        </IconButton>
        {image.category === "animation" ? (
          open ? (
            <iframe
              onClick={onClickImage}
              title="animation"
              style={{ opacity: loading ? "0" : "1" }}
              onLoad={() => setLoading(false)}
              src={mainImage}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : null
        ) : (
          <LazyLoadImage
            onClick={onClickImage}
            effect="black-and-white"
            onLoad={() => setLoading(false)}
            src={mainImage}
            alt={title}
            style={{
              opacity: loading ? "0" : "1",
              cursor: images[index].category === "vr" ? "pointer" : "auto",
            }}
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
        style={{ display: image.category === "animation" ? "none" : "block" }}
        className={classNames(styles.nextImage, styles.iconBtn)}
      >
        <i className="fas fa-arrow-right"></i>
      </IconButton>
    </div>
  );
};

export default Modal;
