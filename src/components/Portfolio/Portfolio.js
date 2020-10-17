import React, { useState, useEffect, createRef } from "react";
import "./Portfolio.css";
import Isotope from "isotope-layout";
import images from "../../assets/static/Gallery/Gallery";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Portfolio = () => {
  const onClickMenu = (item) => {
    setFilterKey(item);
  };

  const isoRef = createRef(null);

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const totalImages = images.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === totalImages) {
      if (isotope) {
        isotope.reloadItems();
      } else {
        setIsotope(
          new Isotope(isoRef.current, {
            itemSelector: ".grid-item",
            percentPosition: true,
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

  return (
    <>
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
              key={`${image.category + i}`}
              className={`grid-item ${image.category}`}
            >
              <img
                src={image.image}
                onLoad={() => setCount((curr) => curr + 1)}
                alt="gallery"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
