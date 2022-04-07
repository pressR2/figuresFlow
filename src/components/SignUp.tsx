import React, { FunctionComponent } from 'react';
import "./SignIn_SignUp.css";

type SignUpProperties = {
    // firstName: string;
    // lastName: string;
    // email: string;
    // password: string | number;
    // retypePassword: string | number;  
}

const SignUp: FunctionComponent<SignUpProperties> = () => {
    return(
        <div className='container'>
            <div className='form-container'>
                <form>
                    <h2>Enter Your Details</h2>
                    <input placeholder='First Name *'></input>
                    <input placeholder='Last Name *'></input>
                    <input placeholder='Email *'></input>
                    <input placeholder='Password *'></input>
                    <input placeholder='Retype Password *'></input>
                    <button className='sign-up-bt' type='submit'>Sign Up</button>
                    <div className='inner-label'>
                        <label>Already Have An Account? Then</label>
                        <a href='/#'>Sign In</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;