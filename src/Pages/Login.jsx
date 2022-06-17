import {
 Center,
 FormLabel,
 Heading,
 HStack,
 Stack,
 VStack,
} from "@chakra-ui/react";
import { Button } from "bootstrap";
import React from "react";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthConext";
import "../styles/Login.module.css";

const Login = () => {
const {isAuth,handleLogin} = useContext(AuthContext)



 return (
   <form className="form-box">
     <Center>
       <Heading>Log in</Heading>
     </Center>
     <Stack p={10} spacing={5}>
       <VStack alignItems={"left"} className="form-group">
         <FormLabel>Email</FormLabel>
         <input
           type="email"
           className="form-control"
           placeholder="Enter email"
         />
       </VStack>

       <VStack alignItems={"left"} className="form-group">
         <FormLabel>Password</FormLabel>
         <input
           type="password"
           className="form-control"
           placeholder="Enter password"
         />
       </VStack>

       <div className="form-group">
         <div className="custom-control custom-checkbox">
           <input
             type="checkbox"
             className="custom-control-input"
             id="customCheck1"
           />
           <FormLabel
             className="custom-control-FormLabel"
             htmlFor="customCheck1"
           >  
               Remember me
               
           </FormLabel>
         </div>
       </div>

       <button onClick={handleLogin} className="btn btn-dark btn-lg btn-block">
         Sign in
       </button>
     </Stack>
     <HStack>
               <button  className="btn btn-success btn-lg btn-block">
                   Sing Up
               </button>
               <p className="forgot-password text-right">
                   Forgot <a href="#">password?</a>
               </p>
              </HStack>
   </form>
 );
};

export default Login;
