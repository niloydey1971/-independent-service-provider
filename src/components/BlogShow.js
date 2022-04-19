import React from 'react';
import { Link } from 'react-router-dom';
import race2 from '../../src/race2.png'

const BlogShow = () => {
    return (
        <div className='blogshow '>
            <div className='container grid-two-col sm-flex'>
                <img src={race2} alt='photography'></img>
                <div className='blogshow-text'>
                    <h1>My Best Experiences</h1>
                    <p>Every successful photo has three things in common, and they’re not particularly surprising. The proper aperture, exposure, and focusing distance? The right camera, lens, and tripod? Successful use of hyperfocal distance, ISO invariance, and ETTR? No! The three variables that matter the most in photography are simple: light, subject, and composition. </p>
                    <button className='btn'>
                        <Link className='btn-text' to='/blog'>More Blogs</Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default BlogShow;