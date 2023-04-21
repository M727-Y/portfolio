import React from 'react';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className='navigation__list'>
        <li className='navigation__list__item'><a href='#'>Mikhail Yugay</a></li>
        <li className='navigation__list__item'><a href="#bio" >Bio</a></li>
        <li className='navigation__list__item'><a href="#resume" >Resume</a></li>
        <li className='navigation__list__item'><a href="#capstone" >Capstone Project</a></li>
        <li className='navigation__list__item'><a href="#projects" >Projects</a></li>
        <li className='navigation__list__item'><a href="#contacts" >Contacts</a></li>
      </ul>
    </nav>
  );
};



export default Navigation;
