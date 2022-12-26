
import '../css/proivderContent.css'
import { useSelector } from 'react-redux'

import Api from './Api';

export default function ProviderContent() {
    const url = useSelector((state)=> state.addInfo.src);
    const name = useSelector((state)=> state.addInfo.name);
   
  return (
    <div className='providerContent'>
        <div className='top'>
            <div className='imgDiv'>
             <img src={url} alt="" />
            </div>
            <div className='underImg'>
                 <h2>{name}</h2>
                 <p>Work Hard - Have Fun - Make History</p>
            </div>
          
            
        </div>
       <Api />
    </div>
  )
}
