import React from 'react'
import img from '../img/Group 36.png'
import img2 from '../img/Group 22.png'
import left from '../img/Group 42.png'
import right from '../img/Group 43.png'
import amazon from '../img/amazon.png'
import aramex from '../img/aramex.png'
import hitachi from '../img/Hitachi.png'
import '../css/content.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addimg, addInfo } from '../redux/providerSlice'
export default function Content() {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    
    const handlClick =(e)=>{
        navigate("/providers");
        let url = e.target.src;
        let element = document.getElementById(e.target.id).parentElement.nextElementSibling.innerHTML;
        dispatch(addInfo(element));
        dispatch(addimg(url))

     }
    
  return (
    <div className='Content'>
        <div className='top'>
            <div className='info'>
                <h2>We Fill Your Gap</h2>
                <p>We are ready to bring you all your needs anywhere at any time through our useful mobile application. No need to waste time you are one click away.</p>
                <button>Install Now</button>
            </div>
            <div className='img'>
                <img src={img} alt="" />
            </div>
        </div>
        <div className='mid'>
            <div className='imgDiv'>
                <img src={img2} alt="" />
            </div>
            <div className='info'>
                <h2>What We Offer</h2>
                <p>We Offer you different kinds of services that will help you save your time and be more comfortable. </p>
                <button>Our Services</button>
            </div>
        </div>
        <div className='down'>
            <div className='provider'>
                <h2>Our Provider</h2>
            </div>
            <div className='blueDiv'>
                <img className='left' src={left} alt="" />
                <div className='companies'>
                    <div className='company' >
                        <div className='companyLogo'>
                         <img src={amazon} alt=""  id ='1' onClick={handlClick} />
                        </div>
                        <p>Amazon</p>
                    </div>
                    <div  className='company'  >
                        <div className='companyLogo'  >
                        <img src={aramex} alt=""id="2" onClick={handlClick} />
                        </div>
                        <p>Aramex</p>
                    </div>
                    <div  className='company' >
                        <div className='companyLogo'  >
                        <img src={hitachi} alt="" id ="3" onClick={handlClick}/>
                        </div>
                        <p>Hitachi</p>
                    </div>  
                </div>
                <img className='right' src={right} alt="" />
            </div>
        </div>
    </div>
  )
}
