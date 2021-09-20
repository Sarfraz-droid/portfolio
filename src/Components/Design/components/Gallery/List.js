import React from 'react'
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import styles from "../../../../scss/Design.module.scss";

import arr from "./Photos.json"

function List({setSelectedId,SelectedId}) {


  const style = {
      variant: {
        open : {
          opacity: 0,
        },
        closed : {
          opacity: 1,
        }
      }
  }

    return (
        <div>
            <motion.div className={styles["gallery-grid"]}>
            {arr.map((item, index) => {
              return (
                <motion.div layoutId={`card-image-container-${item.id}`} className={styles["gallery-grid-component"]}
                  animate={SelectedId === item.id ? style.variant.open : style.variant.closed}>
                  <img
                    src={item.image}
                    className={styles["gallery-grid-item"]}
                    layoutId={item.id}
                    onClick={() => { console.log(item.id); setSelectedId(item.id)}}
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>
    )
}

export default List
