import React, { FunctionComponent, useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignForms.css";
import { ForgotPasswordProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";

const ForgotPassword: FunctionComponent<ForgotPasswordProps> = () => {
    const { register } = useForm<ForgotPasswordProps>();
    const authContext  = useAuth();
    const emailRef = React.useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await authContext?.resetPassword(emailRef.current!.value);
            setMessage("Check your inbox for further instructions");
        } catch (e: unknown){
            console.log(e);
            setError("Faild to reset password");
        }
        setLoading(false);
    }
 
    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Password Reset</h2>
                    {error && alert(`${error}`)}
                    {message && alert(`${message}`)}
                    <input {...register("email")} type="email" ref={emailRef} placeholder=" Email *"></input>
                    <div className="buttons-container">
                        <button className="reset_bt" type="submit" disabled={loading}>
                            Reset
                        </button>
                        <Link to="/signIn" className="back_bt">
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

export default ForgotPassword;
