import React, { useEffect } from "react";
import "./CalendarLarge.css";
import CalendarOneDay from "./CalendarOneDay";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

// On lui passe le spectacle et il nous sort les dates ?

export default function SpecificCalendar(props) {
  const sendDateToParent = e => {
    props.dateSetter(e.target.getAttribute("data-date"));
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
      {dateArray.map(date => {
        return (
          <div
            className="calendarWrapper"
            key={dayjs(date).format()}
            data-date={date}
            onClick={sendDateToParent}
          >
            <CalendarOneDay
              key={dayjs(date).format("ddd D MMM")}
              day={dayjs(date).format("ddd")}
              num={dayjs(date).format("D")}
              month={dayjs(date).format("MMM")}
              date={dayjs(date).format()}
            />
          </div>
        );
      })}
    </div>
  );
}
