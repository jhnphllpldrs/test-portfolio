import React from 'react'
import'./header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'
import {BsArrowDownCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1> Kyle Corpuz</h1>
        <h5 className="text-light">FrontEnd Developer  -  UI/UX Designer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="me"/>
        </div>
       

        <a href='#contact' className='scroll_down'><BsArrowDownCircleFill/></a>
      </div>
    </header>
  )
}

export default Header