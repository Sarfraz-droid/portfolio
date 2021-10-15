import React,{useState} from 'react'
import styles from "../../../scss/Developer/Footer.module.scss";

import LinkedIn from "../../../assets/Landing/Developer/SocialMedia/linkedinicon.svg"
import GitHub from "../../../assets/Landing/Developer/SocialMedia/Github.svg"
import Email from "../../../assets/Landing/Developer/SocialMedia/mail.svg"

export default function Footer() {
    
    const [Socials, setSocials] = useState([
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/sarfraz-alam-113575201/",
            icon: LinkedIn
        },
        {
            name: "GitHub",
            icon: GitHub,
            link: "https://github.com/Sarfraz-droid"
        },
        {
            name: "Email",
            icon: Email,
            link: "mailto:alamsarfraz422@gmail.com"
        }
    ])
    
    return (
        <div className={styles['footer']}>
            <div className={styles['header']}>
                Connect me on
            </div>
            <div className={styles['social-media-container']}>
                {Socials.map((social, index) => {
                    return (
                        <a href={social.link} key={index}>
                            <img src={social.icon} alt={social.name}/>
                        </a>
                    )
                })}
            </div>

        </div>
    )
}
