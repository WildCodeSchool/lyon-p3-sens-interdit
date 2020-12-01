import React from "react";
import "./Result.css";
export default function Result(props) {
  return (
    <div class="flex-wrapper">
      <img src={props.image} alt={props.id} />
      <div class="text-wrapper">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button>Lire la suite</button>
    </div>
  );
}