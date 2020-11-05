import React from "react"
import "./Calendar.css"

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-container">
        <div className="calendar-day">
          <p>mer</p>
          <span>16</span>
          <p>Oct</p>
        </div>
        <div className="calendar-day active">
          <p>mer</p>
          <span>16</span>
          <p>Oct</p>
        </div>
        <div className="calendar-day">
          <p>mer</p>
          <span>16</span>
          <p>Oct</p>
        </div>
        <div className="calendar-day">
          <p>mer</p>
          <span>16</span>
          <p>Oct</p>
        </div>
        <div className="calendar-day">
          <p>mer</p>
          <span>16</span>
          <p>Oct</p>
        </div>
      </div>
    </div>
  )
}

export default Calendar
