import React from "react";
import '../experience/experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobe} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiCanva} from 'react-icons/si'
import {SiAdobelightroom} from 'react-icons/si'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_web">
          <h3>Web Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive className="experience-details-icons"/>
              <h4>HTML</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/>
            </article>

            <article className="experience_details">
              <SiCss3 className="experience-details-icons"/>
              <h4>CSS</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/>
            </article>

            <article className="experience_details">
              <SiJavascript className="experience-details-icons"/>
              <h4>Java Script</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarEmpty/>
            </article>

            <article className="experience_details">
              <SiBootstrap className="experience-details-icons"/>
              <h4>Bootstrap</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf/>
            </article>

            <article className="experience_details">
              <GrReactjs className="experience-details-icons"/>
              <h4>Reactjs</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf/> <ImStarEmpty/>
            </article>

          </div>
        </div>
        <div className="experience_design">
          <h3>UI/UX Designer</h3>
          <div className="experience_content">
          <article className="experience_details">
              <SiAdobephotoshop className="experience-details-icons"/>
              <h4>Photoshop</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf/>
            </article>

            <article className="experience_details">
              <SiAdobeillustrator className="experience-details-icons"/>
              <h4>Illustrator</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarEmpty/>
            </article>

            <article className="experience_details">
              <SiAdobe className="experience-details-icons"/>
              <h4>Animate</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf/>
            </article>

            <article className="experience_details">
              <SiFigma className="experience-details-icons"/>
              <h4>Figma</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf/> <ImStarEmpty/>
            </article>

            <article className="experience_details">
              <SiCanva className="experience-details-icons"/>
              <h4>Canva</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarEmpty/>
            </article>

            <article className="experience_details">
              <SiAdobelightroom className="experience-details-icons"/>
              <h4>Lightroom</h4>
              <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarEmpty/>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
