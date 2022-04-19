import React from 'react';
import { Link } from 'react-router-dom';
import niloy from '../niloy.png'

const About = () => {
    return (
        <div className='blogshow about'>
            <div className='container grid-two-col sm-flex'>
                <img src={niloy} alt='Me Niloy'></img>
                <div className='blogshow-text'>
                    <h1>Niloy Dey - Sports Photographer.</h1>
                    <p>My Goal is to be a good web developer and for this I left no stone unturned. Developing is my passion. In 3 years I want to see myself a higher position that I imagined now. My another goal is to help hungry people by feeding them around the world. During this training I found so many lackings that I need to resolve as soon as possible and I am grateful to P.Hero for such a contribution. </p>
                    <button className='btn'>
                        <Link className='btn-text' to='/signup'>Contact Me</Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default About;