import React, { useEffect, useState } from 'react';

export default function Api() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  return (
    <div>
        {posts.map((e)=>
        <div key={e.id}>
        <p>{`ID : ${e.id}  ` } </p>   
        <p>{`title : ${e.title}`}</p>
        <p>{`  body : ${e.body}`}</p> 
        </div>
        
        )}
    </div>
  )
}
