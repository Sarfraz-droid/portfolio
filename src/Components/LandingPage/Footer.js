import React from 'react'

import style from "../../scss/Footer.module.scss"

import {Link} from "react-router-dom"

import Insta from "../../assets/Landing/Footer/Insta.png"
import LinkedIn from "../../assets/Landing/Footer/LinkedIn.png"
import Yt from "../../assets/Landing/Footer/Yt.png"

function Footer() {
    return (
        <div className={style["container"]}>
            <div className={style["Follow"]}>
                Follow
            </div>
            <div className={style["Icons"]}>
                <a href="https://www.instagram.com/sarf_alam/">
                    <img src={Insta} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/sarfraz-alam-113575201/">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/sarf_alam/">
                    <img src={Yt} alt="Yt" />
                </a>
            </div>

            <div className={style["return"]}>
                <Link to="/">
                    Return to Home
                </Link>
            </div>
        </div>
    )
}

export default Footer
