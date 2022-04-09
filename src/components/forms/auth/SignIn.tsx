import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './SignForms.css';

type SignInProperties = {
    // email: string;
    // password: string | number;
    // rememberMe: boolean;   
}

const SignIn: FunctionComponent<SignInProperties> = () => {
    return (
        <div className='container'>
            <div className='form-container'>
                <form>
                    <h2>User Sign In</h2>
                    <input placeholder='Email *'></input>
                    <input placeholder='Password *'></input>
                    <div className='inner-input'>
                        <input type='checkbox'></input>
                        <label>Remember Me?</label>
                        <a href='/#' className='forgot-password_link'>Forgot Password?</a>
                    </div>
                    <button className='sign-in_bt' type='submit'>Sign In</button>
                    <div className='inner-label'>
                        <p>Don't have an account?</p>
                        <Link to='/signUp' className='sign-in_link'>Click here to create one</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;