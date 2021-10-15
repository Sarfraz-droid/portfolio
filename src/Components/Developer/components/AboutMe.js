import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import Profile from "../../../assets/Landing/Developer/Photo.png";
import style from "../../../scss/Developer/Aboutme.module.scss";
function AboutMe() {
  const [Data, setData] = useState({
    name: "Mohammad Sarfraz Alam",
    age: "19",
    College: "Jamia Millia Islamia",
    Course: "Bachlors in Electronics and Communication Engineering",
    Batch: "2020-2024",
  });

  const [Photo, setPhoto] = useState(false);

  return (
    <div id="aboutme" className={style["aboutme"]}>
      <div className={style["heading"]}>
        <p>About Me</p>
      </div>
      <div className={style["about"]}>
        <div className={style["code"]}>
          <JSONPretty id="json-pretty" data={Data}></JSONPretty>
          <div className={style["run-btn"]}>
            <button onClick={() => setPhoto(!Photo)}>RUN</button>
          </div>
        </div>
        <div className={style["photo"]} >
          <img src={Profile} style={{
            filter: Photo ? "blur(0px)" : "blur(20px)",
        }}/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
