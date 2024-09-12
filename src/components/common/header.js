import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () =>{
  return(
    <nav>
      <NavLink to="/" exact>Home</NavLink>{' | '}
      <NavLink to="/about" exact>About</NavLink>{' | '}
      <NavLink to="/contactUs" >Contact Us</NavLink>
    </nav>
    
  );
};
export default Header;