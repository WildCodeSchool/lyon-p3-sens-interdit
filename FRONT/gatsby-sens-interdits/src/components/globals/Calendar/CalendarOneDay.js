import React from 'react';
import './CalendarOneDay.css'

export default function CalendarOneDay(props) {
    return (
        <div className="one-day" >
            <p>{props.day}</p>
            <p><strong>{props.num}</strong></p>
            <p>{props.month}</p>
        </div>
    )
}