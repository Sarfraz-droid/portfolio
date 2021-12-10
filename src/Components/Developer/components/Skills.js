import React, { useState } from "react";
import styles from "../../../scss/Developer/MySkills.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from 'react-responsive'

import Download from "../../../assets/Landing/Developer/Download.svg"

function Skills() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const data = [
    {
      subject: "ReactJS",
      Percent: 90,
    },
    {
      subject: "HTML CSS",
      Percent: 100,
    },
    {
      subject: "Node JS & ExpressJS",
      Percent: 86,
    },
    {
      subject: "MongoDB",
      Percent: 80,
    },
    {
      subject: "Javascript",
      Percent: 85,
    },
    {
      subject: "C/C++",
      Percent: 75,
    },
    {
        subject: "Python",
        Percent: 70,
    }
  ];

  return (
    <div className={styles["skills"]}>
      <div className={styles["heading"]}>
        <p>About Me</p>
      </div>
      <RadarChart
        cx={isTabletOrMobile ? 180 : 500}
        cy={isTabletOrMobile ? 180 :   300}
        outerRadius={isTabletOrMobile ? 70 : 250}
        width={isTabletOrMobile ? 400 : 1000}
        height={isTabletOrMobile ? 300 : 600}
        data={data}
      >
        <PolarGrid color="#FFFF"/>
        <PolarAngleAxis dataKey="subject" stroke="#FFFF"/>
        <PolarRadiusAxis color="#FFFF" />
        <Radar
          name="Mike"
          dataKey="Percent"
          stroke="#FFFFFF"
          fill="#FFFFFF"
          fillOpacity={0.6}
        />
      </RadarChart>
      <div className={styles['resume-div']}>
          <a className={styles["resume"]} href="Resume (11).pdf">
            <span>Download Resume</span>
            <img src={Download} alt="Download Resume" />

          </a>
      </div>
    </div>
  );
}

export default Skills;
