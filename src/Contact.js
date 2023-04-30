import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact Me</h2>
      <ul className='links-list'>
        <li><a className='link' href='https://github.com/M727-Y'>GitHub</a></li>
        <li><a className='link' href='https://www.linkedin.com/in/mikhail-yugay-787726212/'>LinkedIn</a></li>
        <li><a className='link' href="mailto:mikhail.yu2001@gmail.com">Email</a></li>
      </ul>
    </section>
  );
};

export default Contact;
