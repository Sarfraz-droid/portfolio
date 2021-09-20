import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
//scss

import landing from "../../scss/landingpage.module.scss";

//Assets - Design
import Designer from "../../assets/Landing/Designer/Bg.png";
import Developer from "../../assets/Landing/Developer/Bg.png";
import DesignLogo from "../../assets/Landing/Designer/Logo.svg";
import Start from "../../assets/Landing/Designer/StartBtn.svg";
import DevLogo from "../../assets/Landing/Developer/DEVELOPER.svg";
import Box from "../../assets/Landing/Developer/box.svg";

import animateScroll from "react-scroll/modules/mixins/animate-scroll";

function Home() {
  const Location = useLocation();
  const History = useHistory();
  const ref = useRef(null);
  const [present, setPresent] = useState("developer");
  const [Full, setFull] = useState({
    developer: false,
    designer: false,
  });
  const styles = {
    designhover: {
      transform: present == "design" ? "translateX(-30%)" : "translateX(-100%)",
      filter: present == "design" ? "brightness(1)" : "brightness(.6)",
    },
    designFull: {
      zIndex: 10,
    },
    devhover: {
      transform:
        present == "developer" ? "translateX(-60%)" : "translateX(40%)",
      filter: present == "developer" ? "brightness(1)" : "brightness(.6)",
    },
    devFull: {
      zIndex: 10,
      transform: "translateX(-100%)",
    },
  };

  useEffect(() => {
    switch (Location.pathname) {
      case "/design":
        setFull({ ...Full, designer: true });
        break;
      case "/developer":
        setFull({ ...Full, developer: true });
        break;
      default:
        setFull({ ...Full, designer: false, developer: false });
    }
  }, [Location.pathname]);

  return (
    <div ref={ref} className={landing["container"]}>
      <div
        className={landing["design"]}
        onMouseOver={() => {
          setPresent("design");
        }}
        style={Full.designer ? styles.designFull : styles.designhover}
      >
        <div className={landing["design-logo"]}>
          <img className={landing["logo"]} src={DesignLogo} />
          <div className={landing["design-start"]}>
            <button
              onClick={() => {
                animateScroll.scrollTo(700);

                setFull({ ...Full, designer: true });
                History.push("/design");
              }}
            >
              <span>START HERE</span>
              <img src={Start} />
            </button>
          </div>
        </div>

        <img className={landing["bg"]} src={Designer} />
      </div>
      <div
        className={landing["developer"]}
        onMouseOver={() => {
          
          setPresent("developer");
        }}
        style={
          Full.developer
            ? styles.devFull
            : Full.designer
            ? null
            : styles.devhover
        }
      >
        <div className={landing["dev-info"]}>
          <div className={landing["logo"]}>
            <img className={landing["dev-logo"]} src={DevLogo} />
            <img className={landing["box"]} src={Box} />
          </div>

          <div className={landing["link"]}>
            <Link
              to="/developer"
              onClick={() => {
                setFull({ ...Full, developer: true });
              }}
            >
              <span className={landing["color"]}>&#60;</span>
              START
              <span className={landing["color"]}>/&#62;</span>
            </Link>
          </div>
        </div>
        <img className={landing["bg"]} src={Developer} />
      </div>
    </div>
  );
}

export default Home;
