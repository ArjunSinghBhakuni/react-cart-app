import { HStack, VStack, Heading, Center, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import "../css/Cart.css";
// const initialState = { count: 0 };
// const reducer=(state,action)=>{
// switch(action.type){

//   case "plus" :
    
//       return(
//         axios
//         .put(`http://localhost:8080/addtocart/${id}`,{
//           count : state.count-1
//         })
  
//         .then(function (response) {
//           console.log(response.data);
  
//           axios.get(`http://localhost:8080/addtocart/`).then((r) => {
//             setCartItem(r.data);
//           });
//         })
//       )
//       // {count : state.count+1}
    
//     case "minus" :
//       return{count : state.count-1}
//     default:  
//       return state.count
     
// }
// }
export const Cart = () => {

  // const [state,dispatch] = useReducer(reducer,initialState)

  const [count,setCount] = useState(0)

  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/addtocart/`).then((r) => {
      setCartItem(r.data);
    });
  }, []);

  const increament =(id)=>{
    axios.get(`http://localhost:8080/addtocart/${id}`).then((r) => {
        console.log(r)
        axios
        .patch(`http://localhost:8080/addtocart/${id}`,{
          count:  r.data.count +1,
          price:r.data.oldprice + r.data.price
        })
        
        .then(function (response) {
          console.log(response.data);
          
          axios.get(`http://localhost:8080/addtocart/`).then((r) => {
            setCartItem(r.data);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      });
  }
  const decreament =(id)=>{
    axios.get(`http://localhost:8080/addtocart/${id}`).then((r) => {
      
      
      axios
      .patch(`http://localhost:8080/addtocart/${id}`,{
        count: r.data.count -1,
        price:  r.data.price -r.data.oldprice
    })

    .then(function (response) {
      // console.log(response.data);
      
      axios.get(`http://localhost:8080/addtocart/`).then((r) => {
        setCartItem(r.data);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  });
  }
  const handleRemove = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/addtocart/${id}`)

      .then(function (response) {
        console.log(response.data);

        axios.get(`http://localhost:8080/addtocart/`).then((r) => {
          setCartItem(r.data);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Center>
        <Heading as="h3" size="lg" marginBottom="10px">
          SHOPPING BAG
        </Heading>
      </Center>

        <VStack>
          {cartItem.map((e) => (
            
            <HStack
              style={{
                padding: "10px",
                width: "300px",
                height: "auto",
                boxShadow: " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
             
            margin:"auto"
              }}
              key={e.id}
            >
              <img src={e.img} alt="" className="cart-img" />
              <VStack width={'100%'}>
                <h2 className="cart-text">{e.title}</h2>
                <p className="cart-text">{`$ ${e.price}`}</p>
                <HStack>
                  <button onClick={()=>decreament(e.id)}>-</button>
                  <Text>{e.count}</Text>
                  <button  onClick={()=>increament(e.id)}>+</button>
                </HStack>
                <button
                  className="remove-button-cart"
                  onClick={() => handleRemove(e.id)}
                >
                  remove{" "}
                </button>
              </VStack>
            </HStack>
          ))}
        </VStack>
    </div>
  );
};
