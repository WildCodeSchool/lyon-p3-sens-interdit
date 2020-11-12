import React from 'react';
import './CalendarLarge.css'
import CalendarOneDay from './CalendarOneDay';

export default function CalendarLarge(){
    return(
        <div className="global-CalendarLarge">
            <CalendarOneDay day="mer" num="16" month="Oct"/>
            <CalendarOneDay day="jeu" num="17" month="Oct"/>
            <CalendarOneDay day="ven" num="18" month="Oct"/>
            <CalendarOneDay day="sam" num="19" month="Oct"/>
            <CalendarOneDay day="dim" num="20" month="Oct"/>
            <CalendarOneDay day="lun" num="21" month="Oct"/>
            <CalendarOneDay day="mar" num="22" month="Oct"/>
            <CalendarOneDay day="mer" num="23" month="Oct"/>
            <CalendarOneDay day="jeu" num="24" month="Oct"/>
        </div>
    )
}