import React, { useState } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
 

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
 const navigate = useNavigate();

const [isAuth,setIsAuth] =  useState(false)

const handleLogin =()=>{

 setIsAuth(true)
 navigate('/')
}

const HandleLogout =()=>{
 setIsAuth(false)
 navigate('/login')
}

 return(
  <AuthContext.Provider value = { {isAuth,handleLogin,HandleLogout}}>{children}</AuthContext.Provider>
 )
}



