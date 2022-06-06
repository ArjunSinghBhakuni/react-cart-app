import React from "react";
import { createContext } from "react";
 
 
export const CartContext = createContext();


export const CartProvider = ({Children})=>{

  
 

  // axios.get(`http://localhost:8080/women/${id}`)
  // .then((r)=>{
  //  console.log(r)
  // })
  


 <CartContext.Provider >{Children}</CartContext.Provider>
}