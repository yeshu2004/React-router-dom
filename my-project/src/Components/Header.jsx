import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='px-10 py-5'>
      <ul className='flex items-center gap-10'>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-black  ${isActive ? "text-orange-700" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-black  ${isActive ? "text-orange-700" : "text-black"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            className={({isActive})=>{
              `text-black ${isActive ? "text-orange-700" : " text-black"}`
            }}
          >
            Github
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
