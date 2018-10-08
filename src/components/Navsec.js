import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navsec () {
  return (
    <nav className='nav'>
      <ul id='horizontal'>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Unanswered
          </NavLink>
        </li>
        <li>
          <NavLink to='/answered' activeClassName='active'>
            Answered
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}