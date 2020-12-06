import React, { useState } from "react";
import "./CalendarOneDay.css";

export default function SpectacleDate(props) {

  const activator = e => {
    e.preventDefault();
    console.log(e.target.getAttribute('data-id'));
    props.setActiveModalId(e.target.getAttribute('data-id'))
  };
  let id = parseInt(props.id);

  return (
    <div
      className={"calendar-container one-day " + (parseInt(props.activeModalId) === id ? "active" : "")}
      data-date={props.date}
    >
      <p
        className={parseInt(props.activeModalId) === id  ? "active" : ""}
        data-date={props.date}
        onClick={activator}
        onKeyDown={()=>{}}
        data-id={id}
      >
        {props.day}
      </p>
      <p
        className={parseInt(props.activeModalId) === id  ? "active" : ""}
        data-date={props.date}
        onClick={activator}
        onKeyDown={()=>{}}
        data-id={id}
      >
        <strong className={parseInt(props.activeModalId) === id  ? "active" : ""} data-date={props.date} onClick={activator}
                data-id={id}>
          {props.num}
        </strong>
      </p>
      <p
        className={parseInt(props.activeModalId) === id  ? "active" : ""}
        data-date={props.date}
        onClick={activator}
        onKeyDown={()=>{}}
        data-id={id}
      >
        {props.month}
      </p>
      <Modal
        show={parseInt(props.activeModalId) === id }
        place={props.place}
        horaire={props.horaire}
        reservationLink={props.reservationLink}
      />
    </div>
  );
}

const Modal = props => {
  const showHideClassName = props.show
    ? "modal"
    : "modal hidden";

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
