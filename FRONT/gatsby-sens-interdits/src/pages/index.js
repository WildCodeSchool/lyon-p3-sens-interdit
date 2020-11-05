import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <h1>This is the home page</h1>
      <Link to="/404">Go to 404 page</Link>
    </>
  )
}
