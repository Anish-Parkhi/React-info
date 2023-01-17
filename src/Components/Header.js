import React from 'react'
import './header.css'
import logo from '../logo.svg'
function Header() {
  return (
    <div>
        <div   className='main-div'> 
          <div>
            <h1 className='head'>Fun facts about React</h1>
            <ul className='list'>
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originally created by John Walker</span></li>
                <li><span>Has well over 100k stars on Github</span></li>
                <li><span>Is maintained by Facebook</span></li>
                <li><span>Powers thousands of enterprise app, inclding mobile apps</span></li>
              </ul>
          </div>
          <img className='img' src={logo} alt='img'></img>
        </div>
    </div>
  )
}

export default Header