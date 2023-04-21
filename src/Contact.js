import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact Me</h2>
      <form action="submit-form.php" method="post" className="contact__form">
        <label htmlFor="name" className="contact__label">Name</label>
        <input type="text" name="name" id="name" className="contact__input" required />

        <label htmlFor="email" className="contact__label">Email</label>
        <input type="email" name="email" id="email" className="contact__input" required />

        <label htmlFor="message" className="contact__label">Message</label>
        <textarea name="message" id="message" className="contact__textarea" required></textarea>

        <button type="submit" className="contact__button">Send</button>
      </form>
      <br></br>
      <ul className='links-list'>
            <li><a className='link' href='https://github.com/M727-Y'>GitHub</a></li>
            <li><a className='link' href='https://www.linkedin.com/in/mikhail-yugay-787726212/'>LinkedIn</a></li>
        </ul>
    </section>
  );
};

export default Contact;
