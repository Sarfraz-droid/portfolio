import React,{useRef,useState,useEffect} from 'react'

import style from "../../../scss/Design/myskills.module.scss"

import {motion } from "framer-motion"

import Item from './MySkills/Item';

function MySkills() {

    const ref = useRef(null);
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    const skills = [
        {
            name: 'Blender',
            mult: 20,
            x : -400,
            y : 100,
            font: 3
        },
        {
            name: 'Adobe XD',
            mult: 12,
            x : -250,
            y : 0,
            font: 2,
        },
        {
            name: 'Figma',
            mult: 12,
            x : 300,
            y : 40,
            font: 2,
        },
        {
            name: 'After Effects',
            mult: 12,
            x : 150,
            y : 350,
            font: 2,
        },
        {
            name: 'After Effects',
            mult: 12,
            x : 150,
            y : 350,
            font: 2,
        },
        {
            name: 'Unity',
            mult: 5,
            x : 210,
            y : 200,
            font: 2,
            opacity: 0.4
        },
        {
            name: 'Photoshop',
            mult:16,
            x : -100,
            y : 230,
            font: 2.5,
        },
        {
            name: 'Illustrator',
            mult:5,
            x : -300,
            y : 430,
            font: 2,
            opacity: 0.4
        },
        {
            name: 'Premier Pro',
            mult: 16,
            x : -650,
            y : 230,
            font: 2.5,
        },
        {
            name: 'Substance Painter',
            mult:5,
            x : -650,
            y : 30,
            font: 1.5,
            opacity: 0.4
        },
        {
            name: 'Sony Vegas',
            mult: 12,
            x : 450,
            y : 200,
            font: 2,
        }
    ]



    const mousePos = (e) =>{
        // const [x, y] = ref.current.getBoundingClientRect();
        // console.log(x);

        const x = e.clientX;
        const y = e.clientY;
        const rect = ref.current.getBoundingClientRect();
        // console.log((rect.width - x)/rect.width);
        // console.log((rect.height - y)/rect.height);
        setPos({
            x: (rect.width - x)/rect.width,
            y: (rect.height - y)/rect.height
        });

    }


    return (
        <div ref={ref} className={style["MySkills"]} onMouseMove={(e) => mousePos(e)}>
            <h1>My Skills</h1>
            {skills.map((skill, i) => {
                return (
                    <Item key={i} {...skill} pos={pos}/>
                )
            })}
        </div>
    )
}

export default MySkills
