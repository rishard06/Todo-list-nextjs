import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"


function Calendarr({ handleWhen }) {
  const [date, setDate] = useState(new Date())
  console.log(date)
  return (
    <>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-none border-none"
      />
    </>
  )
}

export default Calendarr