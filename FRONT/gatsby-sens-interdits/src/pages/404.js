import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <Link to="/">Go back to Home Page</Link>
  </>
)

export default NotFoundPage
