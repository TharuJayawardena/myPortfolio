// @flow
import * as React from 'react';
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
           <h5>What skills I have</h5>
           <h2>My experience</h2>

           <div className='container experience_container'>
               <div className="experience_frontend">
                   <h3>Frontend Development</h3>
                   <div className='experience_content'>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>HTML</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                           <h4>CSS</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                           <h4>JavaSCript</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>Bootstrap</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>React</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>C#</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>

                   </div>
               </div>

               <div className='experience_backend'>
                   <h3>Backend Development</h3>
                   <div className='experience_content'>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>Node Js</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>MongoDB</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>Mysql</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>SqlServer</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>Oracle</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience_details'>
                           <BsFillPatchCheckFill/>
                           <div>
                               <h4>Koa JS</h4>
                               <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                   </div>
           </div>

            </div>
                
        </section>
    );
};
export default Experience