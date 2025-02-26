import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styles
import './index.css'


let currentDate=new Date();
const CalendarComponent = () => {
  const [date, setDate] = useState(new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+1));

  const onChange = (newDate) => {
    setDate(newDate);
    console.log(date)
  };

  return (
    <div className='calender-block'>
      
      <Calendar
        className='calender'
        onChange={onChange}
        value={date}
        minDate={new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+1)}
        maxDate={new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+7)}  
      />
      
    </div>
  );
};

export default CalendarComponent;

//  <p>Selected Date: {date.toDateString()}</p>