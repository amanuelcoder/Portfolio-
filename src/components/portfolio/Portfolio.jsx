import React from 'react';
import IMG1 from '../../assets/spaceman.png';
import IMG2 from '../../assets/codemonk.png';
import IMG3 from '../../assets/mistate.png';
import IMG4 from '../../assets/spotlabs2.png';
// import IMG5 from '../../assets/news.png';
// import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Modern Touches',
      img: "https://i.imgur.com/Pvsnpv9.png",
      description:
        'Modern Touches is a full MERN-stack single-page web application created with React.js.',
      technologies: 'Skills implemented: Full-Stack Development, Javascript, JSX, HTML, CSS, React.js, GitHub',
      link: 'https://modern-touches.herokuapp.com/orders/new',
      github: 'https://github.com/amanuelcoder/Modern-Touches',
    },
    {
      id: 2,
      title: 'Codemonk',
      img: "https://i.imgur.com/NQs3wPq.png",
      description:
        '[codemonk] is an app where students can come together to do code challenges and discuss their challenges with one another. It is also a platform where students can come network and connect. Through these connections, we can learn from one another and collaboratively become better programmers.',
      technologies: 'Skills implemented: Full-Stack Development, HTML, CSS, Python, Django, PostgreSQL, Google OAuth GitHub, Mob Programming',
      link: 'http://codemonk-wars.herokuapp.com/',
      github: 'https://github.com/amanuelcoder/Codemonk',
    },
    {
      id: 3,
      title: 'Tell Time',
      img: "https://i.imgur.com/fnCKh7i.png",
      description: 'Tell Time is an e-commerce web application designed to list, sell & review watch products.',
      technologies: 'Skills implemented: Full-Stack Development, HTML, CSS, JavaScript, Node.js, MongoDB, GitHub',
      link: 'https://telltime2.herokuapp.com/',
      github: 'https://github.com/amanuelcoder/TellTime',
    },
    {
      id: 4,
      title: 'Concentration - Memory Game',
      img: "https://i.imgur.com/Z1SunqB.png",
      description: 'The game of concentration involves a board containing an even number of squares. Each square in the grid has a picture that matches another square on the board. However, the pictures of all squares are hidden. The goal of the game is to match the pictures of each square with its matching pair.',
      technologies: 'Skills implemented: HTML, CSS, JavaScript, Bootstrap, Visual Studio Code,GitHub',
      link: 'https://amanuelcoder.github.io/Concentration/',
      github: 'https://github.com/amanuelcoder/Concentration',
    },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Take a Look
              </a>
            </div>
          </article>
        ))}
        </div>
    </section>
  );
};

export default Portfolio;