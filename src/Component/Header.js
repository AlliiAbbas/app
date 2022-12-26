import React from 'react'
import bar from '../img/Group 2.png'
import CompanyLogo from '../img/Group 1.png'
import v from '../img/Path 7.png'
import { NavLink } from 'react-router-dom'
import '../css/header.css'
export default function Header() {
  return (
    <div className='header'>
        
        <img src={v} alt="" className='v' />
        <div className='barDiv'>
            <img src={bar} alt="" />
        </div>
        <div className='logo'>
            <img src={CompanyLogo} alt="" />
        </div>
        <div className='nav'>
            <nav>
                <NavLink to="our-services" >Our Services</NavLink>
                <NavLink to="about-us" >About Us</NavLink>
                <NavLink to="join-us">Join Us</NavLink>
            </nav>
        </div>
       
    </div>
  )
}
