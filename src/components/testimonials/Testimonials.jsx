import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 4,
      name: 'Stephanie Lee',
      role: 'Sr Instructional Associate',
      test: "As Aman's former Software Engineering Immersive instructor at General Assembly, I fully support and recommend Aman to be a part of any Software Engineering team as a full-stack developer. Aman was always collaborative, motivated and hardworking. He was always very pro-active in learning and highly engaged. He also demonstrated being a great team player and is just an all-around outstanding person! It was always a pleasure working with him! He would be an excellent addition to any team!",
    },
    {
      id: 1,
      name: 'Andrew Krauss',
      role: 'Classmate',
      test: "Aman works extremely hard and is always willing to lend a helping hand or collaborate on a project. He's smart and has a strong work ethic that is infectious and promotes a high degree of productivity. I admire the passion he shows for his craft and his hunger to learn more and more about it. Working with him was a pleasure and I hope I get the opportunity to do so again in the near future.",
    },
    {
      id: 2,
      name: 'Taylor Romoser',
      role: 'Classmate',
      test: 'Aman has a strong foundation in both JavaScript and Python, and has a particularly impressive understanding of popular frameworks such as Express, React, and Django. Aman consistently produces high quality code and is always looking for ways to improve his skills and knowledge.',
    },
    {
      id: 3,
      name: 'Kris Lim',
      role: 'Team member',
      test: "Aman is a reliable teammate and a hardworking programmer that I had the pleasure of collaborating and working with. During our time for a group project, he continued to impress me with his insight into some problems we had run into and communicated it with precision. His dependability and strong work ethic is what makes him a great developer and a teammate.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>What others say about me</h5>
      <h2>Peer Feedback</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={40}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials