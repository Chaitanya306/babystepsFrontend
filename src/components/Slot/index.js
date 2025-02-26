import React, { useEffect, useState } from 'react'
import './index.css'

import { Component } from 'react'
//import {withRouter} from 'react-router-dom'
import Header from '../Header'
import {useNavigate, useParams, useSearchParams} from 'react-router-dom'

const Slot=()=> {
    //const d=useParams();
    const [searchParams] = useSearchParams();
    const date = searchParams.get('date');
    const navigate = useNavigate();
    let { id } = useParams();

    const [slots,setSlots]=useState([])
    
    const routingBack=()=>{
      navigate('/Doctors')
    }
    useEffect(()=>{
      const fetchData = async () => {
        const response = await fetch(`/doctors/${id}/slots/?date=${date}`);
        let Data = await response.json();
        //changeDoctor(newData[0].name)
        Data=Data.map(e=>new Date(e))
        setSlots(Data)
      };
    
      fetchData();
    },[])
    return (
      <div>
        <Header />
        <h1><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></h1>
        <h3>{id}</h3>
        <h5>Available Slots</h5>
        
        <div className='slots-container'>
        {slots.length>0&&slots.map(e=><button>{`${e.getHours()}: 00`}</button>)}
        </div>
        
      </div>
    )
  
}

export default Slot
//<button onClick={routingBack}>Back</button>