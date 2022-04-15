import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignForms.css";
import { SignUpProperties } from "../../../models";

const SignUp: FunctionComponent<SignUpProperties> = () => {
    const { register, handleSubmit } = useForm<SignUpProperties>();
    const [data, setData] = useState("");

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit((values) => setData(JSON.stringify(values)))}>
                    <h2>Enter Your Details</h2>
                    <input {...register("firstName")} placeholder="First Name *"></input>
                    <input {...register("lastName")} placeholder="Last Name *"></input>
                    <input {...register("email")} type="email" placeholder="Email *"></input>
                    <input {...register("password")} type="password" placeholder="Password *"></input>
                    <input {...register("retypePassword")} type="password" placeholder="Retype Password *"></input>
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
