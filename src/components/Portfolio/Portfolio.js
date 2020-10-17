import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import Isotope from "isotope-layout";
import images from "../../assets/static/Gallery/Gallery";

const Portfolio = () => {
  const onClickMenu = (item) => {
    setFilterKey(item);
  };

  const isoRef = useRef(null);

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    if (isotope) isotope.reloadItems();
    else
      setIsotope(
        new Isotope(isoRef.current, {
          itemSelector: ".grid-item",
          // layoutMode: "fitRows",
          masonry: {
            columnWidth: 100,
          },
        })
      );
  }, [isotope]);

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
          <li onClick={() => onClickMenu("*")} data-filter="*">
            All
          </li>
          <li onClick={() => onClickMenu("animation")} data-filter=".animation">
            Animation
          </li>
          <li onClick={() => onClickMenu("stills")} data-filter=".stills">
            Stills
          </li>

          <li onClick={() => onClickMenu("vr")} data-filter=".vr">
            VR/360
          </li>
        </ul>
      </div>
      <div ref={isoRef} className="grid gallery">
        {images.map((image, i) => {
          return (
            <img
              src={image.image}
              className={`grid-item ${image.category}`}
              alt="gallery"
            />
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
