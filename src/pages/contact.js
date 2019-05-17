import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => (
  <>
    <Header title="Contact" />
    <p>
      This is the contact me is via{" "}
      <a
        href="https://twitter.com/@slowdata"
        target="_blank"
        rel="noopener noreferrer"
      >
        @slowdata
      </a>{" "}
      on Twitter
    </p>
    <Footer />
  </>
)

export default Contact
