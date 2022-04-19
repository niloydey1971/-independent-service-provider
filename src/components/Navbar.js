import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);

    }
    return (
        <div class="navbar">

            <div class="container flex">
                <h1 class="logo">sporphy</h1>
                <ul>
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
    );
};

export default Navbar;