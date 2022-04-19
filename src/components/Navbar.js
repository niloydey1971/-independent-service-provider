import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [mobileMenu, setMobileMenu] = useState(false)

    const handleSignOut = () => {
        signOut(auth);

    }
    return (
        <div>
            <div className='menu'>
            <div className='d-none hamburger-menu' onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <XIcon></XIcon> : <MenuIcon></MenuIcon>} </div>
            </div>
            


            <div class="navbar">


                <div class="container flex">
                    <h1 class="logo">sporphy</h1>
                    <ul className={`${mobileMenu? 'top-50' : 'topMinus-120'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {
                            user?.uid ?
                                <ul>
                                    <li className='signOutBtn' onClick={handleSignOut}>Sign Out</li>
                                </ul>
                                :
                                <ul>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/signup'>Signup</Link></li>
                                </ul>
                        }



                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;