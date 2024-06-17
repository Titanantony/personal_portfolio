import React from 'react'
import './Footer.css' // Make sure to create and import a CSS file for the styling

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h2>Let’s Connect There</h2>
          <p>Leslie</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className='social-icons'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/path-to-facebook-icon.png' alt='Facebook' />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/path-to-instagram-icon.png' alt='Instagram' />
            </a>
            <a
              href='https://www.behance.net'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/path-to-behance-icon.png' alt='Behance' />
            </a>
            <a
              href='https://www.dribbble.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/path-to-dribbble-icon.png' alt='Dribbble' />
            </a>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-navigation'>
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#blogs'>Blogs</a>
              </li>
              <li>
                <a href='#faqs'>FAQs</a>
              </li>
            </ul>
          </div>
          <div className='footer-contact'>
            <h4>Contact</h4>
            <p>(671) 555-0110</p>
            <p>
              <a href='mailto:debbie.baker@example.com'>
                debbie.baker@example.com
              </a>
            </p>
            <p>
              <a
                href='http://www.konmtaffix.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                http://www.konmtaffix.com
              </a>
            </p>
          </div>
          <div className='footer-subscription'>
            <h4>Get the Latest Information</h4>
            <form className='subscription-form'>
              <input type='email' placeholder='yourmail' />
              <button type='submit'>
                <img src='/path-to-send-icon.png' alt='Send' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
