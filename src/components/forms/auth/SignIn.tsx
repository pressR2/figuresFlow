import React, { FunctionComponent, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignForms.css";
import { SignInProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";

const SignIn: FunctionComponent<SignInProps> = () => {
    const { register } = useForm<SignInProps>();
    const authContext  = useAuth();
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await authContext?.signIn(emailRef.current!.value, passwordRef.current!.value);
            navigate("/dashboard");
        } catch {
            setError("Faild to log in");
        }
        setLoading(false);
    }
 
    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>User Sign In</h2>
                    {error && alert(`${error}`)}
                    <input {...register("email")} type="email" ref={emailRef} placeholder=" Email *"></input>
                    <input {...register("password")} type="password" ref={passwordRef} placeholder=" Password *"></input>
                    <div className="inner-input">
                        <input {...register("rememberMe")} type="checkbox" id="rememberMe"></input>
                        <label htmlFor="rememberMe">Remember Me</label>
                        <Link to="/forgotPassword" className="sign_link">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="buttons-container">
                        <button className="sign-in_bt" type="submit" disabled={loading}>
                            Sign In
                        </button>
                        <Link to="/#" className="back_bt">
                            Back
                        </Link>
                    </div>
                    <div className="inner-label">
                        <p>Don't have an account?</p>
                        <Link to="/signUp" className="sign_link">
                            Click here to create one
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
