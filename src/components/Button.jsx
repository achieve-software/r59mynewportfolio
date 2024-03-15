import React from 'react'
import "./Button.scss";
import { useNavigate } from 'react-router-dom';
const Button = () => {

  
  const navigate=useNavigate();
  return (
    
    
    <button className='button1'
    onClick={()=> navigate(`/projects`)}>
    <span>MY-PROJECTS</span>
    <div class="top"></div>
    <div class="left"></div>
    <div class="bottom"></div>
    <div class="right"></div>
    
</button>
  )
}

export default Button