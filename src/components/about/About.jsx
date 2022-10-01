import * as React from 'react';
import './about.css'
import ME from '../../assest/Me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt={'About image'}/>
                    </div>

                </div>
                <div className="about_content">
                   <div className="about_cards">
                       <article className='about_card'>
                           <FaAward className='about_icon'/>
                           <h5>Experience</h5>
                           <small>1+ Years Working</small>
                       </article>

                       <article className='about_card'>
                           <FiUsers className='about_icon'/>
                           <h5>Clients</h5>
                           <small>200+ Worldwide</small>
                       </article>

                       <article className='about_card'>
                           <VscFolderLibrary className='about_icon'/>
                           <h5>Projects</h5>
                           <small>10+ completed</small>
                       </article>
                   </div>
                    <p>
                        Being a Software Engineer is more than just programming.
                        It’s a chance to help other people through the power of technology.
                        Having this as a job gives engineers the power to influence other peoples life through programs that could help them with day to day tasks.
                        Software Engineering is an expanding occupation, which means that more and more jobs are opening up for this position everyday.
                        Also, one of the perks of this job is how much money you make. Software Engineering is a good job because, the market is expanding for
                        it pays well, and this job can help other people.

                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    );
};
export default About