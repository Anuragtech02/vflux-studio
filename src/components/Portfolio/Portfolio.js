import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import Isotope from "isotope-layout";
import images from "../../assets/static/Gallery/Gallery";
import { Modal } from "../../components";

const Portfolio = ({ loading, setLoading, loadFlag, setLoadFLag }) => {
  const onClickMenu = (item) => {
    setFilterKey(item);
  };

  const isoRef = useRef(null);

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const totalImages = images.length;
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(images[0]);

  useEffect(() => {
    if (count === totalImages) {
      if (loading) setLoading(false);
      if (isotope) {
        isotope.reloadItems();
      } else {
        setIsotope(
          new Isotope(isoRef.current, {
            itemSelector: ".grid-item",
            // percentPosition: true,
            layoutMode: "masonry",
            masonry: {
              columnWidth: ".grid-sizer",
            },
          })
        );
      }
    }
  }, [isotope, count, totalImages]);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: "*" })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  // const appendToIsotope = () => {
  //   if (isotope) {
  //     isotope.arrange({ filter: filterKey });
  //   }
  // };

  const [modalClass, setModalClass] = useState("modalClosed");

  const openModal = (image) => {
    setModalImage(() => image);
    setModalClass("modalOpen");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalClass("modalClosed");
    setModalOpen(false);
  };

  const openVr = (image) => {
    const a = document.createElement("a");

    if (image.original.includes("vr_tour")) {
      a.href = image.original;
      a.target = "_blank";
      a.click();
    } else {
      a.href = image.original;
      a.target = "_blank";
      a.click();
    }
  };

  return (
    <>
      <div onClick={closeModal} className={`modal ${modalClass}`}>
        <Modal images={images} open={modalOpen} image={modalImage} />
      </div>
      <div className="portfolio-menu">
        <ul>
          <li
            onClick={() => onClickMenu("*")}
            className={filterKey === "*" ? "is-selected" : ""}
            data-filter="*"
          >
            All
          </li>
          <li
            onClick={() => onClickMenu("animation")}
            className={filterKey === "animation" ? "is-selected" : ""}
            data-filter=".animation"
          >
            Animation
          </li>
          <li
            onClick={() => onClickMenu("stills")}
            className={filterKey === "stills" ? "is-selected" : ""}
            data-filter=".stills"
          >
            Stills
          </li>

          <li
            onClick={() => onClickMenu("vr")}
            className={filterKey === "vr" ? "is-selected" : ""}
            data-filter=".vr"
          >
            VR/360
          </li>
        </ul>
      </div>
      <div ref={isoRef} className="grid gallery">
        <div className="grid-sizer"></div>
        {images.map((image, i) => {
          return (
            <div
              onClick={() => {
                image.category === "vr" ? openVr(image) : openModal(image);
              }}
              key={`${image.category + i}`}
              className={`grid-item ${image.category}`}
            >
              <img
                src={image.src}
                onLoad={() => {
                  setCount((curr) => curr + 1);
                }}
                alt={image.title}
                style={{
                  opacity:
                    image.category === "animation" || image.category === "vr"
                      ? "0.7"
                      : "1",
                }}
              />
              <div className="title">
                <h4>{image.title}</h4>
              </div>
              {image.category === "animation" ? (
                <div className="type-icon play-icon">
                  <i className="fas fa-play" />
                </div>
              ) : image.category === "vr" ? (
                <div className="type-icon">
                  <i className="fas fa-vr-cardboard" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
