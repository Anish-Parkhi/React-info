import React from 'react'
import logo from '../logo.svg'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <div className='div'>
          <img className='react-image' src={logo} alt='just an img'></img>
          <h1 className='nav-heading'>ReactFacts</h1>
          <h2 className='para'>React Course Project - 1</h2>
        </div>
    </div>
  )
}

export default Navbar