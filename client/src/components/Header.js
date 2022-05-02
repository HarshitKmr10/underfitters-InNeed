import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h2 className='logo' onClick={() => navigate("/")}>InNeed</h2>
      <ul>
        <li>About Us</li>
        <li onClick={() => navigate("/donate")}>Donate</li>
        <li onClick={() => navigate("/our-services")}>Our Services</li>
        <li><button className='btn btn-primary' onClick={() => navigate("/register")}>Get Help</button></li>
      </ul>
    </header>
  )
}

export default Header