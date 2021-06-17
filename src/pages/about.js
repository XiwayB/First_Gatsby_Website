import React from "react"
import Navbar from "../components/navbar"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Navbar headerText="About Gatsby" arbitraryPhrase="..."/>
      <Navbar subHeaderText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}
