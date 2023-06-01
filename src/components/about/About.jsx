import React from "react";
import "./about.css";
import aboutme from "../../assets/aboutme.png";
import aboutme2 from "../../assets/aboutme2.png";
import { GiGraduateCap } from "react-icons/gi";
import {SiAdobephotoshop} from "react-icons/si";
import {TbBusinessplan} from "react-icons/tb";
import {SiHomeadvisor} from "react-icons/si";
import {GiOrganigram} from "react-icons/gi";

function About() {
  return (
    <section id="about">
      <h5>Get to know more</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={aboutme} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="aboutme_cards">
            <artice className="about_card">
              <GiGraduateCap className="about_icon"/>
              <h5>Bulacan State University</h5>
              <small>BSIT</small>
            </artice>

            <artice className="about_card">
              <SiAdobephotoshop className="about_icon"/>
              <h5>Xentra Solutions</h5>
              <small>UI/UX Intern</small>
            </artice>

            <artice className="about_card">
              <TbBusinessplan className="about_icon"/>
              <h5>Business Owner</h5>
              <small>Krimc Cube Shop</small>
            </artice>

            <artice className="about_card">
              <SiHomeadvisor className="about_icon"/>
              <h5>Paombong Bulacan</h5>
              <small>Home Town</small>
            </artice>

            <artice className="about_card">
              <GiOrganigram className="about_icon"/>
              <h5>Ambassador</h5>
              <small>SWITS</small>
            </artice>
          </div>
          <p>
            I'm Kyle Renan Isiah M. Corpuz a fresh graduate from Bulacan State University by course of Information Technology<br/>
            I will be a perfect asset for your company because I'm willing to learn every business process from inside and out.
          </p>
          <div className="lets">
          <a href="#contact" className="btn btn=primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
