import React from 'react'
import { Link } from 'gatsby'

export default function ListLink() {
  return (
    <div className="footer-list-link footer-one">
      <ul>
        <li><Link to='/mentions' title="Mentions Légales">Mentions Légales</Link></li>
        <li><Link to='/conditions' title="Conditions Générales d'utilisation">Conditions générales d'utilisation</Link></li>
        <li><Link to="/sitemap" title="Plan du site">Plan du site</Link></li>
      </ul>
    </div>
  )
}
