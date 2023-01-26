import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <section id="contact">
        <a href="#contact" className="footer__logo"></a>
        <div className="footer__socials">
          <a href="https:/linkedin.com/in/amanuel-gashaw-361395228" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <a href="https://github.com/amanuelcoder" target="_blank" rel="noreferrer" ><FaGithub /></a>
          <a href="mailto:amanuel.mg@gmail.com" target="_blank" rel="noreferrer" ><AiOutlineMail /></a>
        </div>
      </section>
    </footer>
  )
}

export default Footer