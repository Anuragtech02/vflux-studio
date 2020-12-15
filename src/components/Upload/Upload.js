import React, { useState, useCallback, useEffect } from "react";
import styles from "./Upload.module.css";
import { Grid, TextField } from "@material-ui/core";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const Upload = () => {
  //   const onDrop = useCallback((acceptedFiles) => {
  //     // Do something with the files
  //   }, []);
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("animation");
  const [youtube, setYoutube] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log(files);
  }, [files]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!files || !files.length) {
      alert(
        category === "animation"
          ? "Please select thumbnail"
          : "Please select an image"
      );
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={onSubmit}
        className={classNames(styles.uploadSection, styles.flexColumn)}
      >
        <h3>Upload Files</h3>
        <Grid spacing={4} container>
          <Grid item md={6} xs={12}>
            <div className={classNames(styles.details, styles.flexColumn)}>
              <h4>Enter Details</h4>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                className={styles.inputField}
                placeholder="Select Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                id="category"
              >
                <option className={styles.menuOption} value="animation">
                  Animation
                </option>
                <option className={styles.menuOption} value="stills">
                  Stills
                </option>
                <option className={styles.menuOption} value="vr">
                  VR/360
                </option>
              </select>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Youtube Video Link"
                required={category === "animation"}
                disabled={category !== "animation"}
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section style={{ width: "100%" }}>
                  <div className={styles.dropZone} {...getRootProps()}>
                    <input
                      {...getInputProps()}
                      accept="image/x-png,image/jpg,image/jpeg,image/webp"
                    />
                    <p>
                      {category === "animation"
                        ? files && files.length
                          ? files[0].name
                          : "Drag & drop thumbnail image or click to select one"
                        : files && files.length
                        ? files[0].name
                        : "Drag & drop image here, or click to select one"}
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Upload;
