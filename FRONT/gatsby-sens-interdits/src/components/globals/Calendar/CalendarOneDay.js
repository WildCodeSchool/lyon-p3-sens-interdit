import React from "react";
import "./CalendarOneDay.css";

export default function CalendarOneDay(props) {
  return (
    <div className="one-day" data-date={props.date}>
      <p data-date={props.date}>{props.day}</p>
      <p data-date={props.date}>
        <strong data-date={props.date}>{props.num}</strong>
      </p>
      <p data-date={props.date}>{props.month}</p>
    </div>
  );
}
