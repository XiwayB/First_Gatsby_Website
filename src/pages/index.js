import React from "react"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import {Button} from "../components/ButtonElements"

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <div className="home-intro">
      <div className="home-intro-text">
        <h1>FULL STACK DEVELOPER</h1>
        <p>Passionate about programming, I’m here to help people create a communication tool that will help them spread their ideas to the world.</p>
      </div>
        <Button>LEARN MORE</Button>
    </div>
    <Image/>
    </>
  )
}
