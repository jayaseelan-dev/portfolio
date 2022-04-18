import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <p style={paragraphStyles}>
        <h1>Page not found</h1>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
