import * as React from 'react'
import CV from '../../assest/cv.pdf'


const CTA = () => {
    return (
        <div className='cta'>
            <a href= {CV} download className='btn'>Download cv</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
    );
};
export default CTA