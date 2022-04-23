import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./SignForms.css";
import { SignUpProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";

const SignUp: FunctionComponent<SignUpProps> = () => {
    const { register } = useForm<SignUpProps>();
    const authContext  = useAuth();
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const retypePasswordRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: any) {
        e.preventDefault();

        if (passwordRef.current?.value !== retypePasswordRef.current?.value) {
            return setError("Password do not match");
        }

        try {
            setError("");
            setLoading(true);
            await authContext?.signUp(emailRef.current!.value, passwordRef.current!.value);
            navigate("/");
        } catch (e: unknown){
            console.log(e);
            setError("Faild to create an account");
        }
        setLoading(false);
    }

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Enter Your Details</h2>
                    {error && alert(`${error}`)}
                    <input {...register("firstName")} placeholder=" First Name *"></input>
                    <input {...register("lastName")} placeholder=" Last Name *"></input>
                    <input {...register("email")} type="email" ref={emailRef} placeholder=" Email *"></input>
                    <input {...register("password")} type="password" ref={passwordRef} placeholder=" Password *"></input>
                    <input {...register("retypePassword")} type="password" ref={retypePasswordRef} placeholder=" Retype Password *"></input>
                    <div className="buttons-container">
                        <button className="sign-up_bt" type="submit" disabled={loading}>
                            Sign Up
                        </button>
                        <Link to="/#" className="back_bt">
                            Back
                        </Link>
                    </div>
                    <div className="inner-label">
                        <p>Already Have An Account? Then</p>
                        <Link to="/signIn" className="sign_link">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
