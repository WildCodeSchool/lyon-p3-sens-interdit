import React, { useState } from "react";
import "./CalendarLarge.css";
import SpectacleDate from "./SpectacleDate";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

// On lui passe le spectacle et il nous sort les dates

export default function SpecificCalendar(props) {
  const thisSpectacle = props.spectacle;
  
  const [activeModalId, setActiveModalId] = useState(null);

  function splitHoraires(spectacle) {
    let listHoraires = [];
    spectacle.horaires.forEach(date => {
      listHoraires.push(date.Day);
    });

    return listHoraires;
  }

  const dateArray = splitHoraires(thisSpectacle);

  return (
    <div className="global-calendar-large calendar-container">
      {dateArray.map((date, i) => {
        return (
          <div
            className="calendarWrapper"
            key={i}
            data-date={date}
          >
            <SpectacleDate
              key={dayjs(date).format("ddd D MMM")}
              day={dayjs(date).format("ddd")}
              num={dayjs(date).format("D")}
              month={dayjs(date).format("MMM")}
              date={dayjs(date).format()}
              place={thisSpectacle.place}
              horaire={dayjs(date).format("H:mm")}
              reservationLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              activeModalId={activeModalId}
              setActiveModalId={setActiveModalId}
              id={i}
            ></SpectacleDate>
          </div>
        );
      })}
    </div>
  );
}
