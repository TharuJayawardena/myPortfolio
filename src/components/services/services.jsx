import * as React from 'react';
import './services.css';
import {BsCheckLg} from 'react-icons/bs'
 const Services = () => {
    return (
        <section id='service'>
          <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service_list">
                      <li>
                          <BsCheckLg className='service_list-icon'/>
                          <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                      </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon'/>
                            <p>Aa bsw bghjial jhdgt gbytbhh njdgb</p>
                        </li>

                    </ul>
                </article>
            </div>
        </section>
    );
};

 export default Services