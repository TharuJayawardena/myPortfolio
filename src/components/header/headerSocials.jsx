// @flow
import  React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
              <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
              <a href="https://github.com" target="_blank"><BsGithub/></a>

        </div>
    );
};
export default HeaderSocials