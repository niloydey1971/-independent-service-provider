import React, { useState } from 'react';
import auth from '../firebase.init';
import race2 from '../../src/race2.png'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import google from '../google.png'

const Signup = () => {


    // declare the states......
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')


    // destructuring......
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);
    // google signIn
    const [signInWithGoogle] = useSignInWithGoogle(auth);

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
            <div className='container grid-two-50 sm-flex'>
                <img src={race2} alt='photography'></img>
                <div className=' form card  sm-card'>
                    <h2>Sign Up for Access</h2>
                    <form onSubmit={handleSignUp}>

                        <input className='input-box' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required></input>


                        <input className='input-box' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>


                        <input className='input-box' onBlur={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="password" required></input>

                        <input type="submit" value="Sign Up" className="btn"></input>
                    </form>
                    <h2 className='text-center'>Or,</h2>
                    <div className='flex googleSignIn' onClick={() => signInWithGoogle()} >
                        <img src={google} alt='google'></img>
                        <p>Sign In with Google</p>
                    </div>
                    <p className='switch'>Already Signed In? Go to the <Link className='switch-account' to='/login'>Login Page</Link></p>
                </div>



            </div>

        </div>
    );
};

export default Signup;