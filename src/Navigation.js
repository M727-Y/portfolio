import React from 'react';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className='navigation__list'>
        <li className='navigation__list__item'><a href='#'>Mikhail Yugay</a></li>
        <li className='navigation__list__item'><a href="#bio" >Biography</a></li>
        <li className='navigation__list__item'><a href="#resume" >Resume</a></li>
        
        <li className='navigation__list__item'><a href="#projects" >Projects</a></li>
        <li className='navigation__list__item'><a href="#contact" >Contacts</a></li>
      </ul>
    </nav>
  );
};



export default Navigation;
