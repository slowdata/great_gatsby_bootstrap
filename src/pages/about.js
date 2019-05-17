import React from "react"

import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const About = () => (
  <>
    <Header title="About Me" />
    <p>I'm Ricardo and I am a full-time developer.</p>
    <p>
      You can reach me here <Link to="/contact">Contact</Link>
    </p>
    <Footer />
  </>
)

export default About
