import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./SignForms.css";

type SignUpProperties = {
    // firstName: string;
    // lastName: string;
    // email: string;
    // password: string | number;
    // retypePassword: string | number;
};

const SignUp: FunctionComponent<SignUpProperties> = () => {
    return (
        <div className="container">
            <div className="form-container">
                <form>
                    <h2>Enter Your Details</h2>
                    <input placeholder="First Name *"></input>
                    <input placeholder="Last Name *"></input>
                    <input placeholder="Email *"></input>
                    <input placeholder="Password *"></input>
                    <input placeholder="Retype Password *"></input>
                    <div className="buttons-container">
                        <button className="sign-up_bt" type="submit">
                            Sign Up
                        </button>
                        <Link to="/#" className="back-to-home">
                            Back
                        </Link>
                    </div>
                    <div className="inner-label">
                        <p>Already Have An Account? Then</p>
                        <Link to="/signIn" className="sign-in_link">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
