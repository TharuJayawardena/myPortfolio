import * as React from 'react';
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
    return (
      <footer>
          <a href="#" className='footer_logo'>Tharushi</a>

          <ul className='permalinks'>
              <li><a href='#'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#experience'>Experience</a></li>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#testimonials'>Testimonials</a></li>
              <li><a href='#contact'>Contact</a></li>
          </ul>

          <div className="footer_socials">
              <a href="https://facebook.com"><FaFacebook/></a>
              <a href="https://instergram.com"><AiOutlineInstagram/></a>
              <a href="https://twitter.com"><AiFillTwitterCircle/></a>
          </div>


          <div className="footer_copyright">
              <small>&copy; Tharushi . All right reserved</small>
          </div>
      </footer>
    );
};
export default Footer