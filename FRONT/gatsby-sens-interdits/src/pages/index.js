import React from "react"
import Layout from "../components/globalscomponents/Layout"
import {Link} from "gatsby";

export default function Home() {
  return <Layout>
    <h1>This is the home page</h1>
    <Link to="/404">Go to 404 page</Link>
  </Layout>
}
