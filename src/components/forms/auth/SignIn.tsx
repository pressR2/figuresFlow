import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./SignForms.css";

const SignIn: FunctionComponent<SignInProps> = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required(""),
        password: Yup.string().required(""),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<SignInProps>({
        resolver: yupResolver(validationSchema),
    });

    const authContext = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    let [errorMessageText, setErrorMessageText] = useState<string>("");
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<SignInProps> = async (data) => {
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
    };

    const formatEmptyFieldsLabel = () => {
        setErrorMessageText("");
        if (errors.password && errors.email) {
            setErrorMessageText("Please fill marked fields");
        } else if (errors.password || errors.email) {
            setErrorMessageText("Please fill marked field");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formatEmptyFieldsLabel();
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key || "");
            if (e.target.value === key) {
                setValue("password", value || "", { shouldValidate: true });
                setErrorMessageText("");
            }
        }
    };

    useEffect(() => {
        formatEmptyFieldsLabel();
    }, [errors]);

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>User Sign In</h2>
                {error && (
                    <label id="invalid-signin" className="invalid-feedback">
                        {error}
                    </label>
                )}
                <section>
                    <input
                        {...register("email", { onChange: handleChange })}
                        type="email"
                        placeholder="Email *"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signin"
                    />
                    <input
                        {...register("password", { onChange: handleChange })}
                        type="password"
                        placeholder="Password *"
                        className={`form-control ${
                            errors.password ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signin"
                    />
                    {errorMessageText && (
                        <label id="invalid-signin" className="invalid-feedback">
                            {errorMessageText}
                        </label>
                    )}
                </section>
                <section className="inner-signin">
                    <label className="remember-me">
                        Remember Me
                        <input {...register("rememberMe")} type="checkbox" />
                    </label>
                    <Link to="/forgotPassword" className="forgot-password-link">
                        Forgot Password?
                    </Link>
                </section>
                <section className="signin-btn-container">
                    <button
                        className="signin-btn"
                        type="submit"
                        disabled={loading}
                    >
                        Sign In
                    </button>
                    <Link to="/#" className="back-btn">
                        Back
                    </Link>
                </section>
                <section className="create-account-link">
                    <p>Don't have an account?</p>
                    <Link to="/signUp" className="sign-link">
                        Click here to create one
                    </Link>
                </section>
            </form>
        </div>
    );
};
  
export default SignIn;