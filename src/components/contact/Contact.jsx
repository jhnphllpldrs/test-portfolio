import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoLogoYoutube} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0e365e9', 'template_hyebnhl', form.current, 'n3-IKG8F-2wAgNhXs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>corpuzkyle08@gmail.com</h5>
            <a href="mailto:corpuzkyle08@gmail.com">Email</a>
          </article>

          <article className="contact_option">
            <SiMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Kyle Corpuz</h5>
            <a href="https://m.me/kyle.corpuz.98" target='_blank'>Message me</a>
          </article>

          <article className="contact_option">
            <IoLogoYoutube className='contact_option-icon'/>
            <h4>Visit My Youtube Channel</h4>
            <h5>Kyle Corpuz</h5>
            <a href="https://www.youtube.com/@KyleCorpuz/featured" target='_blank'>Visit</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Type Your Message Here'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>        
        </form>
      </div>
    </section>
  )
}

export default Contact