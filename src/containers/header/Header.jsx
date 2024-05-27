import React from 'react';
import './header.css';
import profile_img from '../../assets/img/profile-img.jpg';
import 'boxicons/css/boxicons.min.css';
const Header = () => {
  return (
    <header id="header" className='header'>
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profile_img} alt="" className="header__profile_img" />
          <h1 className="header__profile_h1 text__center text__light"><a className="header__profile_h1_a" href="index.html">Alex Smith</a></h1>
          <div className="social__links social_links_mt text__center">
            <a href="#" className="header__profile__social_links_a"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="header__profile__social_links_a"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="header__profile__social_links_a"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="header__profile__social_links_a"><i className="bx bxl-skype"></i></a>
            <a href="#" className="header__profile__social_links_a"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>{/* .nav-menu */}
      </div>
    </header>
  )
}

export default Header