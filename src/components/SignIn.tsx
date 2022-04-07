import React, { FunctionComponent } from 'react';
import './SignIn_SignUp.css';

type SignInProperties = {
    // email: string;
    // password: string | number;
    // rememberMe: boolean;   
}

const SignIn: FunctionComponent<SignInProperties> = () => {
    return(
        <div className='container'>
            <div className='form-container'>
                <form>
                    <h2>User Sign In</h2>
                    <input placeholder='Email *'></input>
                    <input placeholder='Password *'></input>
                    <div className='inner-input'>
                        <input type='checkbox'></input>
                        <label>Remember Me?</label>
                        <a href='/#'>Forget Password?</a>
                    </div>
                    <button className='sign-in-bt' type='submit'>Sign In</button>
                    <div className='inner-label'>
                        <label>Don't have an account?</label>
                        <a href='/#'>Click here to create one</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;