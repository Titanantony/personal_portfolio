import React from 'react';
import './Portfolio.css';
import profileImage from './assets/person.jpeg'; // Make sure to replace with the correct path

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <h1 className="logo">Leslie</h1>
        <nav className="nav">
          <a href="#service">Service</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="main-content">
        <div className="text-content">
          <h2>This Is</h2>
          <h1 className="name">Leslie Alexander</h1>
          <h2 className="title">UI/UX Designer+ Graphics Designer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          <button className="download-btn">Download CV</button>
          <div className="social-links">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            <a href="#behance"><i className="fab fa-behance"></i></a>
            <a href="#dribbble"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>
        <div className="image-content">
          <img src={profileImage} alt="Leslie Alexander" />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
