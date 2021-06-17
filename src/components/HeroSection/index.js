import React from "react"
import "./HeroSection.css"
import {Button} from "../ButtonElements"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi,</h1>
      <h2>I'm Xiway</h2>
      <h2>A passionnate</h2>
      <Button to="/contact/">CONTACT ME</Button>
    </div>
  )
}

export default HeroSection
