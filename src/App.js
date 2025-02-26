import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Doctors from './components/Doctors'
import Appointments from './components/Appointments';
import Slot from './components/Slot';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 /*
  const [doc,setDoc]=useState("")
  
  useEffect(()=>{
    fetch('/doctors').then(r=>r.json()).then(d=>setDoc(d))
  },[])
  */
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/doctors' Component={Doctors} />
        <Route exact path='/doctors/:id/slots' Component={Slot} />
        <Route exact path='/appointments' Component={Appointments} />
      </Routes>
        
    </div>
  );
}

export default App;
