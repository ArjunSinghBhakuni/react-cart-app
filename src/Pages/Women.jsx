import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
import {   useNavigate, useSearchParams } from 'react-router-dom'
 
export const Women = () => {

  
  const [page, setPage] = useState( 1);
 

  const navigate = useNavigate();
  const [women,setWomen] = useState([])
useEffect(() => {
   
  axios.get(`http://localhost:8080/women/?_page=${page}&_limit=4`)
  .then((r)=>{
    console.log(r)
  console.log(r.data)  
    setWomen(r.data)
  } 
  )
}, [page ])

 const  handleClick =(id)=>{

  navigate(`${id}`)
 }
 
 
  return (
    <div>
      
      
<h1>Womens</h1>
<div>
        <button disabled={page === 1} onClick={() => setPage(page-1)}>
        { '<' }
        </button>
        <button   onClick={() => setPage(page+1)}>
          { '>' }
        </button>
      </div>
<div  style={{display:"grid" ,  gridTemplateColumns:"repeat(2,1fr)",  gap:'20px', border:'1px solid teal'  ,width:'90%',margin:'auto' }}>
  {women.map((e)=>{
    return <div  key={e.img} style={{  border:'1px solid teal' ,  }}  > 
    <h3 >{e.title}</h3>
    <img  onClick={()=>handleClick(e.id)} width='200px' height='200px' src={e.img} alt=""   />
    <p>{e.price}</p>
   
    
    </div>
  })}
</div>
 
    </div>
  )
}
