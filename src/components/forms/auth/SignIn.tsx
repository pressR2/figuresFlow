import { FunctionComponent, useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignForms.css";
import { SignInProperties } from "../../../models";

const SignIn: FunctionComponent<SignInProperties> = () => {
    const { register, handleSubmit } = useForm<SignInProperties>();
    const [data, setData] = useState("");
 
    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit((values) => setData(JSON.stringify(values)))}>
                    <h2>User Sign In</h2>
                    <input {...register("email")} type="email" placeholder="Email *"></input>
                    <input {...register("password")} type="password" placeholder="Password *"></input>
                    <div className="inner-input">
                        <input {...register("rememberMe")} type="checkbox" id="rememberMe"></input>
                        <label htmlFor="rememberMe">Remember Me</label>
                        <a href="/#" className="forgot-password_link">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="buttons-container">
                        <button className="sign-in_bt" type="submit">
                            Sign In
                        </button>
                        <Link to="/#" className="back-to-home">
                            Back
                        </Link>
                    </div>
                    <div className="inner-label">
                        <p>Don't have an account?</p>
                        <Link to="/signUp" className="sign-in_link">
                            Click here to create one
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
