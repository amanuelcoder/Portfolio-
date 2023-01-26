import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Footer from '../footer/Footer';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
    {/* <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    </section> */}
    <Footer />
    </>
  );
};

export default Contact;