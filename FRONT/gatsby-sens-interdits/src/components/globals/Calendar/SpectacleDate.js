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
      onClick={activator}
    >
      <p className={active ? "active" : ""} data-date={props.date}>
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
    </div>
  );
}