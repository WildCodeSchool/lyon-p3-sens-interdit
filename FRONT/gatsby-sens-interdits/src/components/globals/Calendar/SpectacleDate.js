import React, { useState } from "react";
import "./CalendarOneDay.css";

export default function SpectacleDate(props) {
  const [active, isActive] = useState(false);

  const activator = e => {
    e.preventDefault();
    isActive(!active);
  };

  return (
    <div
      className={active ? "one-day active" : "one-day"}
      data-date={props.date}
      
    >
      <p className={active ? "active" : ""} data-date={props.date} onClick={activator}>
        {props.day}
      </p>
      <p className={active ? "active" : ""} data-date={props.date}>
        <strong className={active ? "active" : ""} data-date={props.date}>
          {props.num}
        </strong>
      </p>
      <p className={active ? "active" : ""} data-date={props.date}>
        {props.month}
      </p>
      <Modal
        show={active}
        place={props.place}
        horaire={props.horaire}
        reservationLink={props.reservationLink}
      />
    </div>
  );
}

const Modal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <h3>
        <strong>{props.place}</strong>
      </h3>
      <p>{props.horaire}</p>
      <a href={props.reservationLink} target="_blank">
         Réserver 
      </a>
    </div>
  );
};
