import React, { useEffect } from "react";
import "./CalendarLarge.css";
import CalendarOneDay from "./CalendarOneDay";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function CalendarLarge(props) {
  const sendDateToParent = e => {
    console.log("target", e);
    props.dateSetter(e.target);
  };

  const dateArray = [
    dayjs().subtract(4, "d"),
    dayjs().subtract(3, "d"),
    dayjs().subtract(2, "d"),
    dayjs().subtract(1, "d"),
    dayjs(),
    dayjs().add(1, "d"),
    dayjs().add(2, "d"),
    dayjs().add(3, "d"),
    dayjs().add(4, "d"),
  ];

  return (
    <div className="global-calendar-large">
      {dateArray.map(date => (
        <div
          className="calendarWrapper"
          key={dayjs(date).format()}
          onClick={sendDateToParent}
          
        >
          <CalendarOneDay
            key={dayjs(date).format("ddd D MMM")}
            day={dayjs(date).format("ddd")}
            num={dayjs(date).format("D")}
            month={dayjs(date).format("MMM")}
          />
        </div>
      ))}
    </div>
  );
}
