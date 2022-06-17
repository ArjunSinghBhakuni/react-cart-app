 import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
 
import { AuthContext } from '../context/AuthConext'

const Account = () => {

 const{isAuth,HandleLogout}= useContext(AuthContext)
  return (
   
    <div>Account
     <Button onClick={HandleLogout}>logout</Button>
    </div>
  )
}

export default Account