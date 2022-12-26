import React from 'react'
import v from '../img/Path 155.png'
import andorid from '../img/googleplay.png'
import ios from '../img/pngwing.com (9).png'
import CompanyLogo from '../img/Group 52.png'
import location from '../img/Icon material-location-on.png'
import '../css/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        
        <img src={v} alt="" className='v' />
        <div className='barDiv'>
            <h2>About Us</h2>
            <div className='infoAbout'><p>Our History</p><p>How We Work</p><p>Resources</p></div>
            <div className='logos'>
              <img src={andorid} alt="" />
              <img src={ios} alt=""  className='ios'/>
            </div>
        </div>
        <div className='logo'>
            <img src={CompanyLogo} alt="" />
        </div>
        <div className='info'>
            <div className='top'>
              <img src={location} alt="" />
              <span>Saudi Arabia</span>
            </div>
            <div className='mid'>
              <p>Jeddah, Sultan St., Lilyan Tower 2, 11th Floor</p>
            </div>
            <div className='dowen'>
              <p>Email: hello@forall.com</p>
              <p>Office: +00 123 456 789</p>
            </div>
        </div>
       
    </div>
  )
}
