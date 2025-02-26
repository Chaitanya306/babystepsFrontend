import React, { Component } from 'react'
import Header from '../Header'
import './index.css'
export default class Appointments extends Component {

  state={appointments:[]}
  componentDidMount(){
      let fetching=async()=>{
        let promise=await fetch('/appointments')
        let data=await promise.json()
        this.setState({appointments:data})
      }
      fetching()
  }
  render() {
    const {appointments}=this.state
    return (
      <div>
        
        <Header />
        {console.log(appointments)}
        <ul>
          {appointments.length>0 && appointments.map(e=>
            <li>
              <div className='appointment-card'>
                <p>Appointment type is {e.appointmentType}</p>
                <p>Name is {e.patientName}</p>
                <p>DoctorId is {e.doctorId}</p>
                <p>Duration is {e.duration}</p>
              </div>
            </li>
            
          )}
        </ul>
      </div>
    )
  }
}
