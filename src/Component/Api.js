import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Api() {
    const name = useSelector((state)=> state.addInfo.name);
    const [datas, setDatas] = useState([]);
    const [loding ,setLoding] =useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setDatas(data);
             setLoding(false)
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    if(loding) return <div>Loding...</div> 
    
  return (
    <div className='bot'>
         
            <div className='info'>
            <h1>Overview</h1>
            <p>
            {(() => {
        switch (name) {
          case "Amazon":   return datas[0].title;
          case "Aramex": return datas[1].title;
          case "Hitachi":  return datas[2].title;
          default:      return datas[4].title;
        }
             })()}
            </p>
                
            </div>
            <div className='info'>
                <h1>Features and Benefits </h1>
                <p> 
                {(() => {
        switch (name) {
          case "Amazon":   return datas[0].body;
          case "Aramex": return datas[1].body;
          case "Hitachi":  return datas[2].body;
          default:      return datas[3].body;
        }
             })()}
                </p>
            </div>
        
       
        </div>
  )
}

