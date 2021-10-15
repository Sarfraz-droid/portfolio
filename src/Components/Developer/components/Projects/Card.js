import React from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import styles from "../../../../scss/Developer/Project.module.scss";

import arr from "./Projects.json";

import cross from "../../../../assets/Landing/Designer/Cross.svg";

function Card({ setSelectedId, SelectedId }) {
  const style = {
    exit: {
      transform: "scale(0.1)",
    },
    image: {
      objectFit: SelectedId === null ? "none" : null,
    },
  };

  const CardComponent = (item) => {
    return (
      <div className={styles["card-component"]}>
        {/* <motion.img
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={styles["gallery-cross"]}
          src={cross}
          onClick={() => setSelectedId(null)}
        /> */}
        <div className={styles["card-container"]}>
            <motion.img
              layoutId={`card-image-container-${item.id}`}
              src={item.image}
              className={styles["gallery-grid-item"]}
              style={style.image}
            />
          <motion.div className={styles["card-info"]} animate={{ opacity: 1}} exit={{ opacity:0}} >
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
            {item.web != undefined ?
              <a className={styles["web"]} href={item.web}>Web</a>
            : null}
            {item.github != undefined ?
              <a className={styles["github"]} href={item.github}>Github</a>
            : null}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <motion.div className={styles["Photo-en"]}>
      {arr
        .filter((item, index) => {
          return item.id === SelectedId;
        })
        .map((item) => {
          return (
            <div>
              {CardComponent(item)}
              <motion.div
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  backgroundColor: "black",
                  width: "100vw",
                  height: "100vh",
                  position: "fixed",
                  top: 0,
                  opacity: 0,
                  zIndex: 1,
                }}
                onClick={() => setSelectedId(null)}
              />
            </div>
          );
        })}
    </motion.div>
  );
}

export default Card;
