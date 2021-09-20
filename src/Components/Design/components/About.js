import React from "react";

import style from "../../../scss/Design/about.module.scss";

import bg from "../../../assets/Landing/Designer/Bg.png";
import profile from "../../../assets/Landing/Designer/AboutMe/Photo.png"

function About() {
  return (
    <div className={style["container"]}>
      <img className={style["bg"]} src={bg} />

      <div className={style["section"]}>
        <div>
          <h1>About Me</h1>
        </div>

        <div className={style["info"]}>
            <div className={style["left"]}>
                <p className={style["Name"]}>
                    Mohammad Sarfraz Alam
                </p>
                <div className={style["College"]}>
                    <p>
                        Jamia Millia Islamia
                    </p>
                    <p>
                        2020-2024
                    </p>
                </div>
            </div>
            <div>
                <img src={profile} className={style["profile"]} />
            </div>
        </div>

      </div>
    </div>
  );
}

export default About;
