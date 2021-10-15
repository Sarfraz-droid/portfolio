import React from 'react'
import Project from "./components/Project"
import AboutMe from './components/AboutMe'
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function Developer() {
    return (
        <div className="developer-container">
            <Project />            
            <AboutMe />
            <Skills />
            <Footer />
        </div>
    )
}

export default Developer
