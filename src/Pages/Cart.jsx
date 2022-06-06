import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Cart = () => {
 const [cartItem,setCartItem]= useState([]);
useEffect(()=>{

 axios.get(`http://localhost:8080/addtocart/`)
 .then((r)=>{
  setCartItem(r.data)
 })
},[])
 
 
   const handleRemove = (id) => {
     console.log(id)
    axios.delete(`http://localhost:8080/addtocart/${id}` )  
   
      .then(function(response) {
        console.log(response.data)
        
 axios.get(`http://localhost:8080/addtocart/`)
 .then((r)=>{
  setCartItem(r.data)
 })
        
      }).catch(function(error) {
        console.log(error)
      })
    }
 

 
  return (
    <div>
      
      {cartItem.map((e)=>(
        <div key={e.id} style={{display:"flex"}}>
        <img src={e.img} alt="" />
        <h2>{e.title}</h2>
        <p>{e.price}</p>
        <button onClick={()=>handleRemove(e.id)} >remove </button>
        </div>
      ))}

    </div>
  )
}
