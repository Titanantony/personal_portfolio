import React from 'react'
import './Portfolio.css'
import styled from 'styled-components'
import profileImage from './assets/person.jpeg' // Make sure to replace with the correct path

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <header className='header'>
        <h1 className='logo'>Antony</h1>
        <nav className='nav'>
          <a href='#service'>Service</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#about'>About</a>
          <a href='#blog'>Blog</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      <section className='main-content'>
        <div className='text-content'>
          <h2>This Is</h2>
          <h1 className='name'>Antony Kinuthia</h1>
          <h2 className='title'></h2>
          <p>
            {' '}
            I am a dedicated computer science student with a strong passion for
            software development and emerging technologies. With a keen interest
            in roles such as Flutter Developer, React Developer, AI Developer,
            Software Engineer, Mobile Application Developer, and Junior Software
            Developer, I am eager to apply my academic knowledge and
            problem-solving skills to real-world challenges. Through
            self-initiated projects, I have gained practical experience in these
            areas and am excited to continue learning and growing in a
            professional setting.
          </p>
          <p>
            My primary goal is to secure a remote job where I can contribute to
            innovative projects and collaborate with a dynamic team. I am
            enthusiastic about leveraging my skills in problem-solving and my
            hands-on experience to deliver high-quality software solutions. I
            look forward to the opportunity to make a meaningful impact in the
            tech industry.
          </p>{' '}
          <button className='download-btn'>Download CV</button>
          <div className='social-links'>
            <a href='#github'>
              <i className='fab fa-github'></i>
            </a>
            <a href='#linkedin'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='#facebook'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#instagram'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
        <div className='image-content'>
          <img src={profileImage} alt='Antony Kinuthia' />
        </div>
      </section>
    </div>
  )
}

export default Portfolio
