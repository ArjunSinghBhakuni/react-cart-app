import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Kids = () => {

  const [kids,setKids] = useState([])
useEffect(() => {

  axios.get('http://localhost:8080/kids')
  .then((r)=> setKids(r.data))
}, [ ])

 
  return (
    <div>
      
<h1>Kids</h1>
<div style={{display:'grid'}}>
  {kids.map((e)=>{
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
