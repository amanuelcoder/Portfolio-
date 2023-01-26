import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { BsChevronRight } from 'react-icons/bs';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amanuel Gashaw</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
        <BsChevronRight />
        <BsChevronRight />
        <BsChevronRight />
        <BsChevronRight />
        <BsChevronRight />
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;