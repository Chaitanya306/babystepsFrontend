import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to="/"><h1>Baby Steps</h1></Link>
        <div >
          <Link to="/doctors">Doctors</Link>
          <Link to="/appointments">Appointments</Link>
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
      </div>
    )
  }
}
