import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import Header from '../Header'
import 'react-calendar/dist/Calendar.css'; // Import the default styles
import './index.css'
import { Link } from 'react-router-dom';


let currentDate=new Date();
const Doctors = () => {
  const [date, setDate] = useState(new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+1));
  const [doctorName,changeDoctor]=useState('Dr Sagar')
  const [doctorOptions,changeDoctorOptions]= useState([])  
  const changeDoctorName=(event)=>{
    changeDoctor(event.target.value)
    
  }  
  const onChange = (newDate) => {
    setDate(newDate);
    //console.log(date)
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/doctors');
      const newData = await response.json();
      //changeDoctor(newData[0].name)
      changeDoctorOptions(newData)
    };
  
    fetchData();
  },[]);
  
  return (
    <div>
      <Header />
      <div className='calender-block'>
      <Calendar
        className='calender'
        onChange={onChange}
        value={date}
        minDate={new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+1)}
        maxDate={new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+7)}  
      />
      <div>
      <h2 className='mb-2'>Select doctor</h2>
        
        <select className='mb-3 p-3 rounded-3' onChange={changeDoctorName} value={doctorName}>
            {doctorOptions.map(doc=><option value={doc.name}>{doc.name}</option>)}
        </select>
        
        <Link to={`/doctors/${doctorName}/slots?date=${date.getFullYear()}-${date.getMonth()<10?('0'+date.getMonth()):date.getMonth()}-${date.getDate()}`}>Show slots</Link>
      </div>
      
      </div>
      
    </div>
  );
};

export default Doctors;

//  <p>Selected Date: {date.toDateString()}</p>
/*

<option value="Sangeeta">Dr Sangeeta</option>
            <option value="Sager">Dr Sager</option>
            <option value="Anil">Dr Anil</option>
            */
