import * as React from 'react';
import './portfolio.css'
import IMG1 from '../../assest/portfolio_1.jpg';
import IMG2 from '../../assest/portfolio_2.png';
import IMG3 from '../../assest/portfolio_3.jpg';
import IMG4 from '../../assest/portfolio_4.png';


const Portfolio = () => {
    return (
        <section id = 'portfolio'>
        <h5>My React Work</h5>
            <h2>portfolio</h2>
             <div className="container portfolio_container">
                 <article className="portfolio_item">
                     <div className="portfolio_item-image">
                        <img src={IMG1} alt="IMG 1"/>
                         <h3>This is the portfolio item title</h3>
                         <div className="portfolio_item-cta">
                             <a href="https://github.com/" className="btn" target='_blank'>Github</a>
                             <a href="https://github.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                         </div>
                     </div>
                 </article>
                 <article className="portfolio_item">
                     <div className="portfolio_item-image">
                         <img src={IMG1} alt="IMG 1"/>
                         <h3>This is the portfolio item title</h3>
                         <div className="portfolio_item-cta">
                             <a href="https://github.com/" className="btn" target='_blank'>Github</a>
                             <a href="https://github.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                         </div>
                     </div>
                 </article>
                 <article className="portfolio_item">
                     <div className="portfolio_item-image">
                         <img src={IMG1} alt="IMG 1"/>
                         <h3>This is the portfolio item title</h3>
                         <div className="portfolio_item-cta">
                             <a href="https://github.com/" className="btn" target='_blank'>Github</a>
                             <a href="https://github.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                         </div>
                     </div>
                 </article>
                 <article className="portfolio_item">
                     <div className="portfolio_item-image">
                         <img src={IMG1} alt="IMG 1"/>
                         <h3>This is the portfolio item title</h3>
                         <div className="portfolio_item-cta">
                             <a href="https://github.com/" className="btn" target='_blank'>Github</a>
                             <a href="https://github.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                         </div>
                     </div>
                 </article>
                 <article className="portfolio_item">
                     <div className="portfolio_item-image">
                         <img src={IMG1} alt="IMG 1"/>
                         <h3>This is the portfolio item title</h3>
                         <div className="portfolio_item-cta">
                             <a href="https://github.com/" className="btn" target='_blank'>Github</a>
                             <a href="https://github.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                         </div>
                     </div>
                 </article>
                 <article className="portfolio_item">
                     <div className="portfolio_item-image">
                         <img src={IMG1} alt="IMG 1"/>
                         <h3>This is the portfolio item title</h3>
                         <div className="portfolio_item-cta">
                             <a href="https://github.com/" className="btn" target='_blank'>Github</a>
                             <a href="https://github.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                         </div>
                     </div>
                 </article>

             </div>
        </section>
    );
};
export  default Portfolio