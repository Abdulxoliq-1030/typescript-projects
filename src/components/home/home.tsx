import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './style.scss'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="developer" />
          Abdulkholiq
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
