import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
export const Men = () => {
 
  const [man,setMan] = useState([])
useEffect(() => {

  axios.get('http://localhost:8080/men')
  .then((r)=> setMan(r.data))
}, [ ])

 
  
 
 
 
  return (
    <div> 

<h1>Mens</h1>
<div style={{display:'grid'}}>
  {man.map((e)=>{
    return <div key={e.img} style={{display:"grid" ,    gap:'20px', border:'1px solid teal' ,  }}> 
    <h1>{e.title}</h1>
    <img src={e.img} alt="" />
    <p>{e.price}</p>
    </div>
  })}
</div>
 
    </div>
  )
}
