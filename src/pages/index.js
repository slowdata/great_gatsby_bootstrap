import React from "react"

import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const Index = () => (
  <div>
    <Header title="Home" />
    <h2>I'm Ricardo a full-stack developer in the beautiful Lisboa!</h2>
    <p>
      Need a developer? <Link to="/contact">Contact</Link>
    </p>
    <Footer />
  </div>
)

export default Index
