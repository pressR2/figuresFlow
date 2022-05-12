import { FunctionComponent, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./SignForms.css";
import { SignInProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const SignIn: FunctionComponent<SignInProps> = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required(),
        password: Yup.string()
            .required()
    });

    const { register, handleSubmit, setValue, formState: {errors} } = useForm<SignInProps>({
        resolver: yupResolver(validationSchema)
    });
    const authContext  = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    let errorMessageText: string = "";
 
    const onSubmit: SubmitHandler<SignInProps> = async data => {

        try {
            setError("");
            setLoading(true);
            await authContext?.signIn(data.email, data.password);
            localStorage.setItem("rememberMe", String(data.rememberMe));
            if (data.rememberMe) {
                localStorage.setItem(data.email, data.password);
            }    
            navigate("/dashboard");
        } catch {
            setError("Faild to log in");
        }
        setLoading(false);
    }
    

    const handleChange = (e: any) => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            const value = localStorage.getItem(key || "");
            if (e.target.value === key) {
                setValue("password", value || "");
            }
        }
    }


    if (errors.password && errors.email) {
        errorMessageText="Please fill marked fields";
    } else if (errors.password || errors.email) {
        errorMessageText="Please fill marked field";
    }

    let errorMessage = (
        <span className="invalid-feedback">{errorMessageText}</span>
    );

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>User Sign In</h2>
                    {error && <span className="invalid-feedback">{error}</span>}
                    <input {...register("email")} type="email" placeholder="Email *" onChange={handleChange} className={`form-control ${errors.email ? "is-invalid" : ""}`}></input>
                    <input {...register("password")} type="password" placeholder="Password *" className={`form-control ${errors.password ? "is-invalid" : ""}`}></input>
                    {errorMessage}
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
