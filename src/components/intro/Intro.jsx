import React from 'react';
// import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { RiUserStarFill } from 'react-icons/ri';
import ME from '../../assets/me3.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>A little bit</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://i.imgur.com/ApM8jVk.jpg" alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiUserStarFill className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Recent software engineering graduate with a strong foundation in computer science principles, including object-oriented programming, data structures, and algorithms. Proficient in multiple programming languages such as Javascript and python. Strong problem-solving skills and ability to learn new technologies quickly. Excited to bring my skills and enthusiasm to a software development team, where I can contribute to the design and implementation of innovative software solutions.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro