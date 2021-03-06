import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./Products.css";
import {   useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ProdContext } from '../context/ProdContext';
import { Button } from "@chakra-ui/react";
export const Women = () => {
 
  const [page, setPage] = useState( 1);
  const {setGender} = useContext(ProdContext);
  const {id}=useParams();
  const navigate = useNavigate();
  const [women,setWomen] = useState([])
useEffect(() => {
   
  axios.get(`http://localhost:8080/women/?_page=${page}&_limit=6`)
  .then((r)=>{
    console.log(r)
    
  console.log(r.data)  
    setWomen(r.data)
  } 
  )
}, [page ])

 const  handleClick =(id)=>{
setGender("women")
  navigate(`${id}`)
 }
 
 
  return (
    <div>
      
 
<div className="btn-grooup">
        <Button  disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button disabled={page === 2} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
     
      <div className="show-products">
        {women.map((e) => {
          return (
            <div className="single-product" key={e.img}>
              <h4>{e.title}</h4>
              <img
                className="single-img"
                // onClick={() => handleClick(e.id)}
                src={e.img}
                alt=""
              />
              <p>{`Price: $ ${e.price}`}</p>
              <button
                onClick={() => handleClick(e.id)}
                className="products-button"
              >
                More Info
              </button>
            </div>
          );
        })}
      </div>
 
    </div>
  )
}
