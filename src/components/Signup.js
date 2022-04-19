import React, { useState } from 'react';
import auth from '../firebase.init';
import race2 from '../../src/race2.png'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';

const Signup = () => {


    // declare the states......
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')


    // destructuring......
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);

    // chandlesign up btn......
    const handleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password).then(() => {
            sendEmailVerification()
            alert('Verification mail Sent. Please Verify');
        })

    }

    return (
        <div className='blogshow signup'>
            <div className='container grid-two-50'>
                <img src={race2} alt='photography'></img>
                <div className=' form card'>
                    <h2>Sign Up for Access</h2>
                    <form onSubmit={handleSignUp}>

                        <input className='input-box' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required></input>


                        <input className='input-box' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>


                        <input className='input-box' onBlur={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="password" required></input>

                        <input type="submit" value="Sign Up" className="btn"></input>
                    </form>
                </div>



            </div>

        </div>
    );
};

export default Signup;