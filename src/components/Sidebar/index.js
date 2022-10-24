import { Link, NavLink } from 'react-router-dom';
import './index.scss';

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoS from '../../assets/images/ChiragC.png'
import LogoSubtitle from '../../assets/images/chiragSubtitle-removebg-preview.png'

import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faInstagram,
    faRProject,
    faAndroid,
    faProductHunt,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
    faCode,
  } from '@fortawesome/free-solid-svg-icons'
  


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return(
    <div className='nav-bar'>
    <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo"/>
        <img className='sub-logo' src={LogoSubtitle} alt="logoSubtitle"/>
    </Link>

    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faProductHunt} color="#4d4d4e"/>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/chirag-chavda">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.github.com/CHIRAGBCHAVDA">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.leetcode.com/chirag_chavda">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/hacker_0369">
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
    <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />

    </div>

    )
}

export default Sidebar