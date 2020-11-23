import React from 'react';

export default function Ticketing() {
  const url = "http://localhost:8000"
  return (
    <div className="billetterie-programme">
      <a href="https://sensinterdits.mapado.com/" title="billetterie" className="highlight to-uppercase" target="_blank" rel="noreferrer">Billetterie</a>
      <a href={url + "/programme"} title="programme" className="highlight to-uppercase">Programme</a>
    </div>
  )
}