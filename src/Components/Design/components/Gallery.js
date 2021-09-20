import React, { useState } from "react";

import styles from "../../../scss/Design.module.scss";

import Griditem from "../../../assets/Landing/Designer/Gallery/Grid-1.jpg";

import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

import List from "./Gallery/List";
import Card from "./Gallery/Card";

function Gallery() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const [SelectedId, setSelectedId] = useState(null);

  return (
    <div id="#gallery">
      <AnimateSharedLayout type="crossfade">
        <div className={styles["gallery"]}>
          <p>GALLERY</p>
          <List setSelectedId={setSelectedId} SelectedId={SelectedId}/>
        </div>

        <AnimatePresence>
           {SelectedId!= null? <Card setSelectedId={setSelectedId} SelectedId={SelectedId}/> : null}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

export default Gallery;
