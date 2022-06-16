import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProdContext } from "../context/ProdContext";
import { useDisclosure } from '@chakra-ui/react'
import "./Product.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
 
} from '@chakra-ui/react'
import { Cart } from "./Cart";
 
export const Product = () => {
  const [product, setProduct] = useState({});
  const { gender, setGender } = useContext(ProdContext);
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${gender}/${id}`)
      .then((r) => setProduct(r.data));
  }, [id]);

  const handleCart = (id) => {
    console.log(gender, id);
    axios.get(`http://localhost:8080/${gender}/${id}`).then((r) => {
      setGender("");
      axios.post(`http://localhost:8080/addtocart`, {
        id: r.data.id,
        title: r.data.title,
        img: r.data.img,
        price: r.data.price,
      });
    });
  };

  return (
    <div className="product-box-id">
      <div className="prod-img-div" >
        <img className="prod-img" src={product.img} alt="" />
      </div>
    
      {/* <div >
        <img width="200px" height="200px" src={product.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p>{product.price}</p>
          <button onClick={() => handleCart(product.id)}>Add to Cart</button>
        </div>
      </div> */}
      <div className="right">
        
        <h2 className="product_name name">
          {product.title}
        </h2>
        <h4 className="product_price price">{`$ ${product.price}`}</h4>
        <p>VAT exception. VAT not included.</p>
        <p>item no. P00640538</p>
        <select className="options">
          <option>Choose your size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <br />
        <div className="sizeCart">
         
        
 

 
      <Button ref={btnRef} colorScheme='teal'  onClick={onOpen}>
     VIEW SHOPPING BAG
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
        
        
          <DrawerCloseButton />
         
 <Cart/>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  
          
          <button className="size">
            <u>open size chart</u>
          </button>
        </div>

        <button className="wish">ADD TO WISHLIST</button>

        <p>
          If placed within the next tomorrow hour and 12 minutes, your order
          
        </p>

        
          <ul>
            <li>material: 100% wool</li>
            <li>details: 80% polyester, 20% metallic fibres</li>
            <li>lining: 100% viscose, fully lined</li>
            <li>sleeve lining: 100% cupro, fully lined</li>
            <li>
              care instructions: dry clean slit pockets, internal pockets,
              buttoned front
            </li>{" "}
            <li>Made in Italy</li>
            <li>Designer colour name: Cornsilk</li>
          </ul>
        
      </div>
    </div>
  );
};
