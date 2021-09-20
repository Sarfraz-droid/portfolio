import React from 'react'

import {motion} from "framer-motion"

function Item({pos,mult,x,y,font,name,delay,duration,opacity}) {
    const Skill = (x,y,size) => {
        return (
            {
                position: 'absolute',
                marginTop: `${y}px`,
                marginLeft: `${x}px`,
                fontSize: `${size}rem`,
                opacity: opacity != undefined ? opacity : 1
            }
        )
    }
    return (
        <div>
            <motion.div 
                animate={{
                    translateX: pos.x*mult,
                    translateY: pos.y*mult,
                }}
                transition={{
                    delay: delay!==undefined?delay:0,
                    duration: duration!==undefined?duration: null
                }}
            
            style={Skill(x,y,font)}>
                {name}
            </motion.div>
        </div>
    )
}

export default Item
