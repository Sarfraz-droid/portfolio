import React from 'react'

import Gallery from "./components/Gallery"
import About from "./components/About"
import MySkills from "./components/MySkills"
import { useMediaQuery } from 'react-responsive'

import Footer from "../LandingPage/Footer"

function Design() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            <Gallery />
            <About />
            {!isTabletOrMobile ?  <MySkills /> : null}
            <Footer />
        </div>
    )
}

export default Design
