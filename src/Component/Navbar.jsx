import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {

  return (
    <div className="big-box-nav">
      {/* <Link to='/'>Home</Link>
      <Link to='/men'>Men</Link>
      <Link to='/women'>Women</Link>
      <Link to='/kids'>Kids</Link>
      <Link to='/about'>About</Link>
      <Link to='/faq'>Faq</Link>
      <Link to='/contact'>Contact-us</Link>
      <Link to='/addtocart'>Cart</Link> */}

     

      <div className="box1">
        <div className="box11">
           
          <Link className="a1" to='/women'>Women</Link>
          <Link className="a1" to='/men'>Men</Link>
          <Link className="a1" to='/kids'>KIDS</Link>

         
        </div>
        <div className="box12">
        <Link className="a2" to='/login'>Login</Link>
          <Link className="a2" to='/account'>Account</Link>
          <Link className="a2" to='/wishlish'>WishList</Link>
          
             
            
        </div>
      </div>
      <div className="box2">
        
          <div className="img1">
           <Link to='/'>
            <img
              className="aimg"
              src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220420T172422"
              alt=""
              />
              </Link>
          </div>
        
        <div className="bag">
         
          <Link to='/addtocart' className="label"> Shopping bag</Link>
          {/* <!-- <span >Shopping bag</span> --> */}
          <span className="spanbag">
            <i className="bi bi-bag"></i>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </div>
      </div>
      <div className="line-work"></div>
    </div>
  );
};
