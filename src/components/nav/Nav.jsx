import React from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import {FaUserTie} from "react-icons/fa";
import {GiBrain} from "react-icons/gi";
import {RiServiceFill} from "react-icons/ri";
import {RiContactsFill} from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active': ''}> <ImHome /> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}> <FaUserTie /> </a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}> <GiBrain /> </a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}> <RiServiceFill /> </a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}> <RiContactsFill /> </a>
    </nav>
  );
};

export default Nav;
