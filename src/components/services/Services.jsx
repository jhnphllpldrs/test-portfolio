import React from "react";
import "./services.css";
import {AiOutlineAntDesign} from 'react-icons/ai'
import {BiPackage} from 'react-icons/bi'
import {GiFoldedPaper} from 'react-icons/gi'
import {GiPapers} from 'react-icons/gi'
import {MdOutlineWallpaper} from 'react-icons/md'
import {DiJqueryUiLogo} from 'react-icons/di'
import {TbShirtSport} from 'react-icons/tb'
import {MdAnimation} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import {BsFillPersonVcardFill} from 'react-icons/bs'
import {SiFrontendmentor} from 'react-icons/si'
import {BsFiletypeHtml} from 'react-icons/bs'
import {MdSupportAgent} from 'react-icons/md'
import {MdContentPasteSearch} from 'react-icons/md'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {BsFillPenFill} from 'react-icons/bs'
import {GiMoneyStack} from 'react-icons/gi'
import {TfiYoutube} from 'react-icons/tfi'
import {FiTrendingUp} from 'react-icons/fi'


function Services() {
  return (
    <section id="services">
      <h5>What I can Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineAntDesign className="service_list-icons"/>
              <p>Business Designs</p>
            </li>
            <li>
              <BiPackage className="service_list-icons"/>
              <p>Product Packaging Designs</p>
            </li>
            <li>
              <GiFoldedPaper className="service_list-icons"/>
              <p>Brochure</p>
            </li>
            <li>
              <BsFillPersonVcardFill className="service_list-icons"/>
              <p>Calling Card</p>
            </li>
            <li>
              <GiPapers className="service_list-icons"/>
              <p>Flyers</p>
            </li>
            <li>
              <MdOutlineWallpaper className="service_list-icons"/>
              <p>Posters</p>
            </li>
            <li>
              <DiJqueryUiLogo className="service_list-icons"/>
              <p>Logo Design</p>
            </li>
            <li>
              <TbShirtSport className="service_list-icons"/>
              <p>Mock ups</p>
            </li>
            <li>
              <MdAnimation className="service_list-icons"/>
              <p>Logo Animation</p>
            </li>
            <li>
              <CgWebsite className="service_list-icons"/>
              <p>Website Designs</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <SiFrontendmentor className="service_list-icons"/>
              <p>Frontend Development</p>
            </li>
            <li>
              <MdSupportAgent className="service_list-icons"/>
              <p>Support and Maintenance</p>
            </li>
            <li>
              <BsFiletypeHtml className="service_list-icons"/>
              <p>Static Website</p>
            </li>

            
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creator</h3>
          </div>
          <ul className="service_list">
            <li>
              <MdContentPasteSearch className="service_list-icons"/>
              <p>Content Strategy</p>
            </li>
            <li>
              <TiSocialFacebookCircular className="service_list-icons"/>
              <p>Social Media Manager</p>
            </li>
            <li>
              <BsFillPenFill className="service_list-icons"/>
              <p>Copy Writing Services</p>
            </li>
            <li>
              <GiMoneyStack className="service_list-icons"/>
              <p>Content Marketing</p>
            </li>
            <li>
              <TfiYoutube className="service_list-icons"/>
              <p>Influencer</p>
            </li>

            <li>
              <FiTrendingUp className="service_list-icons"/>
              <p>Trend Monitoring</p>
            </li>



            
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Services;
