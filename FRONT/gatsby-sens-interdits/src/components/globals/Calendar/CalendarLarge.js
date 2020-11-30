import React, { useEffect } from "react";
import "./CalendarLarge.css";
import CalendarOneDay from "./CalendarOneDay";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function CalendarLarge(props) {
  useEffect(() => {
    console.log("dateArray", dayjs().format());
  });

  const dateArray = [
    dayjs().subtract(3, "d").format("ddd D MMM"),
    dayjs().subtract(2, "d").format("ddd D MMM"),
    dayjs().subtract(1, "d").format("ddd D MMM"),
    dayjs().format("ddd D MMM"),
    dayjs().add(1, "d").format("ddd D MMM"),
    dayjs().add(2, "d").format("ddd D MMM"),
    dayjs().add(3, "d").format("ddd D MMM"),
  ];

  

  return (
    <div className="global-calendar-large">
      <CalendarOneDay day="mer" num="16" month="Oct" />
      <CalendarOneDay day="jeu" num="17" month="Oct" />
      <CalendarOneDay day="ven" num="18" month="Oct" />
      <CalendarOneDay day="sam" num="19" month="Oct" />
      <CalendarOneDay day="dim" num="20" month="Oct" />
      <CalendarOneDay day="lun" num="21" month="Oct" />
      <CalendarOneDay day="mar" num="22" month="Oct" />
      <CalendarOneDay day="mer" num="23" month="Oct" />
      <CalendarOneDay day="jeu" num="24" month="Oct" />
    </div>
  );
}
