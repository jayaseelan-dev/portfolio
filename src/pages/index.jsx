import * as React from "react";
import { Link } from 'gatsby';

// styles
const pageStyles = {
  color: "#232129",
  padding: 2,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home</title>
      <Link to="/about">About</Link>
      <section>
        <h1>Home Page</h1>
        <p>
          <a href="https://www.gatsbyjs.com/docs/tutorial/part-2/" target="_blank">Material</a>
        </p>
      </section>
    </main>
  )
}

export default IndexPage
