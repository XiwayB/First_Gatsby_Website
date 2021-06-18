import React from "react"
import "./HeroSection.css"
import {ButtonHero} from "../ButtonElements"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi,</h1>
      <h2>I'm Xiway</h2>
      <h2>A passionnate</h2>
      <ButtonHero to="/contact/">CONTACT ME</ButtonHero>
    </div>
  )
}

export default HeroSection
