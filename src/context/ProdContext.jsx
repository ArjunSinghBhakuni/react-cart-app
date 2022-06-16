import React, { useState } from "react";
import { createContext } from "react";

export const ProdContext = createContext();

export const ProdProvider= ({children})=>{

 const [gender,setGender] = useState('');
 return(
  <ProdContext.Provider value={{gender,setGender}}>
{children}
  </ProdContext.Provider>
 )
}