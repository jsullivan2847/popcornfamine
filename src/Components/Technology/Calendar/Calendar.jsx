import React from 'react'
import CalendarElement from './CalendarElement/CalendarElement'
import "./Calendar.css"

export default function Calendar({dates,selectedDate,handleSelect}) {



  return (
    <div className=''>
      {dates.map((date,index)=> {
        return <CalendarElement
        key={index}
        date={date}
        isSelected={selectedDate === index}
        onSelect={handleSelect}
        />
      })}
    </div>
  )
}
