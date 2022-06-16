import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { ProdContext } from '../context/ProdContext';
import "./Products.css";
export const Kids = () => {

  const [page, setPage] = useState( 1);
  const {setGender} = useContext(ProdContext);
const {id}=useParams();
  const navigate = useNavigate();
  const [kids,setkids] = useState([])
useEffect(() => {
   
  axios.get(`http://localhost:8080/kids/?_page=${page}&_limit=6`)
  .then((r)=>{
    console.log(r)
    
  console.log(r.data)  
    setkids(r.data)
  } 
  )
}, [page ])

 const  handleClick =(id)=>{
   setGender('kids') 
  navigate(`${id}`)
 }
 
 
  return (
    <div>
      
      
<h1>kidss</h1>
 
        <button disabled={page === 1} onClick={() => setPage(page-1)}>
        { '<' }
        </button>
        <button  disabled={ page===3} onClick={() => setPage(page+1)}>
          { '>' }
        </button>
      
      <div className="show-products">
        {kids.map((e) => {
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
