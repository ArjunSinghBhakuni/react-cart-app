import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:'flex'  ,gap:"20px"}}>Navbar:
      <Link to='/'>Home</Link>
      <Link to='/men'>Men</Link>
      <Link to='/women'>Women</Link>
      <Link to='/kids'>Kids</Link>
      <Link to='/about'>About</Link>
      <Link to='/faq'>Faq</Link>
      <Link to='/contact'>Contact-us</Link>
     
      <Link to='/addtocart'>Cart</Link>

    </div>
  )
}
