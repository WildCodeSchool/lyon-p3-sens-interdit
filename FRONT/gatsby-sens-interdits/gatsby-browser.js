// gatsby_browser.js is a specific Gatsby file that allows us to hook into different APIs of Gatsby if we need to
// this file will run once the page has been loaded and generated in the browser
// (everytime we make a change in this file, we have to kill and re build the app)

import React from "react"
import Layout from "./src/components/globals/Layout/Layout.js"
import "./src/styles/global.css"

// wrapPageElement is in Gatsby Browser APIs Documentation and allows a plugin to wrap the page element
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
