import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Navbar headerText="Contact" />
    <p>Send us a message</p>
    </div>
  )
}
