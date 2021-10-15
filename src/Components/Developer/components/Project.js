import React, { useState } from "react";

import styles from "../../../scss/Developer/Project.module.scss";


import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

import List from "./Projects/List";
import Card from "./Projects/Card";

function Gallery() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const [SelectedId, setSelectedId] = useState(null);

  return (
    <div id="#gallery">
      <AnimateSharedLayout type="crossfade">
        <div className={styles["gallery"]}>
          <p>PROJECTS</p>
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
