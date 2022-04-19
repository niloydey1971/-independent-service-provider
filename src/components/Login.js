import React, { useState } from 'react';
import auth from '../firebase.init';
import race2 from '../../src/race2.png'
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import google from '../google.png'

const Login = () => {
    // declare the states......
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

       // destructuring the hook......
       const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // click login btn
    const handleLoginForm = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)

    }


    // google signIn
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    
    return (
        <div className='blogshow signup'>
            <div className='container grid-two-50'>
               
                <div className=' form card'>
                    <h2>Log In for Access</h2>
                    <form onSubmit={handleLoginForm}>

                        <input className='input-box' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>


                        <input className='input-box' onBlur={(e) => setpassword(e.target.value)} type="password" name="password" placeholder="password" required></input>

                        <input type="submit" value="Log In" className="btn"></input>
                    </form>
                    <h2 className='text-center'>Or,</h2>
                    <div className='flex googleSignIn' onClick={() => signInWithGoogle()} >
                        <img src={google} alt='google'></img>
                        <p>Sign In with Google</p>
                    </div>
                    <p className='switch'>New to Sporphy? Go to the <Link className='switch-account' to='/signup'>Sign Up Page</Link></p>
                </div>
                <img src={race2} alt='photography'></img>



            </div>

        </div>
    );
};

export default Login;