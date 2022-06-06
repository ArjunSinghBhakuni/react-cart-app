import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {

 const [product,setProduct] = useState({})

 const {id} = useParams();

 useEffect(() => {

  axios.get(`http://localhost:8080/women/${id}`)
  .then((r)=> setProduct(r.data))
}, [ id])

const handleCart=(id)=>{
  axios.get(`http://localhost:8080/women/${id}`)
  .then((r)=>{

    axios.post(`http://localhost:8080/addtocart`,{
      id: r.data.id,
      title:r.data.title,
      img:r.data.img,
      price:r.data.price,
      
    })
  })
}

  return (
    <div>HI product

<h3 >{product.title}</h3>
    <img width='200px' height='200px' src={product.img} alt="" />
    <p>{product.price}</p>
    <button onClick={()=>handleCart(product.id)} >Add to Cart</button>
    </div>
  )
}
