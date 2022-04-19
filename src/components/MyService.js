import React from 'react';
import { Link } from 'react-router-dom';

const MyService = (props) => {
    const { name, price, description, image } = props.services

    return (
        <div className='card'>
            <img src={image} alt='servicephoto'></img><br/>
            <h2>{name}</h2><br/>
            <h3>Service Fee: ${price}</h3><br/>
            <p>{description}</p><br />
            <button className='btn'>
                <Link className='btn-text' to='/checkout'>Book Me Now</Link>
            </button>

        </div>
    );
};

export default MyService;