import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import './style.scss'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="abdulkholiq" />
      </Link>
      <nav>
        <NavLink exact="true" activclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="contact-link"
          activclassname="active"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/abdulkholiq-odiljonov-37b393250//"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Abdulxoliq-1030?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/abdulkholiq_odiljonov/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
