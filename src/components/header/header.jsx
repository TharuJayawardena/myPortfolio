
import * as React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assest/Me.jpeg'
import HeaderSocials from "./headerSocials";

 const Header = () => {
    return (
        <div>
       <header>
           {/*.container*/}
           <div className="container header_container">
               <h5>Hello I'm</h5>
               <h1>Tharushi Jayawardena</h1>
               <h5 className="text-light">Fullstack Developer</h5>
               <CTA/>
               <HeaderSocials/>

               <div className="me">
                   <img src={ME}  alt="Tharushi Jayawardena" />
               </div>

               <a href="#contact" className="scroll_down">Scroll down</a>
           </div>
       </header>
        </div>
    );
};
 export default Header