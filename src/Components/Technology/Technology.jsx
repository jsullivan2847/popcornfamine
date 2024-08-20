import React from 'react'
import HeaderContainer from '../Home/HeaderContainer/HeaderContainer'
import Calendar from './Calendar/Calendar';
import CalendarContent from './Content/CalendarContent';
import { useState } from 'react';
import "../Page.css"


function importAll(r) {
    return r.keys().map(r);
}
const allProjects = importAll(require.context('/src/Projects', false, /\.jsx$/)).reverse();

export default function Technology() {

    const allDates = [...new Set(allProjects.map((project) => project.metadata.date))];

    const [selectedDate, setSelectedDate] = useState(allDates[0])

    const handleSelect = (date) => {
        console.log("date: ",date)
        setSelectedDate(date)
    }

    const selectedProjects = allProjects.filter((project) => project.metadata.date === selectedDate)

    // console.log("selected date: ",selectedDate)
    // console.log("all projects: ",allProjects)
    // console.log("selected projects: ",selectedProjects)

    return (
        <div className='page'>
            <HeaderContainer />
            <Calendar
                dates={allDates}
                selectedDate={selectedDate}
                handleSelect={handleSelect}
            />
            <CalendarContent projects={selectedProjects} selectedDate={selectedDate}/>
        </div>
    )
}
