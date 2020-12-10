// a copy of gatsby-browser.js file but to generate everything on the server (fast ssr = server-side rendering)
// (everytime we make a change in this file, we have to kill and re build the app)

import React from "react";
import Layout from "./src/components/globals/Layout/";
import "./src/assets/styles/global.css";
import { FestivalContextProvider } from "./src/components/context/FestivalContext";

// wrapPageElement is in Gatsby Browser APIs Documentation and allows a plugin to wrap the page element
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export const wrapRootElement = ({ element }) => {
  return <FestivalContextProvider>{element}</FestivalContextProvider>;
};
