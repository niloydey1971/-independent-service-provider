import React from 'react';
import useMyService from '../hooks/useMyService';
import MyService from './MyService';

const Services = () => {
    const [service] = useMyService()
    return (
        <div className='container'>
            <div className='my-5 service'>
                <h1>My Photography Packages</h1>
                <div className='grid grid-three-col sm-flex'>
                    {
                        service.map(s => <MyService
                            key={s.id} services={s}></MyService>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Services;