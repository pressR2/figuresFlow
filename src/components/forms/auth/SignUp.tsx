import { FunctionComponent, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SignUpProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./SignForms.css";

const SignUp: FunctionComponent<SignUpProps> = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string()
            .required("")
            .min(6, "Password must be at least 6 characters"),
        retypePassword: Yup.string()
            .required("")
            .oneOf(
                [Yup.ref("password"), null],
                "Confirm password does not match"
            ),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpProps>({
        resolver: yupResolver(validationSchema),
    });

    const authContext = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    let [errorMessageText, setErrorMessageText] = useState<string>("");
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<SignUpProps> = async (data) => {
        try {
            setError("");
            setLoading(true);
            await authContext?.signUp(data.email, data.password);
            navigate("/signIn");
        } catch {
            setError("Faild to create an account");
        }
        setLoading(false);
    };

    const formatEmptyFieldsLabel = () => {
        setErrorMessageText("");
        if (Object.keys(errors).length > 1 && Object.keys(errors).length <= 5) {
            setErrorMessageText("Please fill marked fields");
        } else if (Object.keys(errors).length === 1) {
            setErrorMessageText("Please fill marked field");
        }
    };

    const handleChange = () => {
        formatEmptyFieldsLabel();
    };

    useEffect(() => {
        formatEmptyFieldsLabel();
    }, [errors]);

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Enter Your Details</h2>
                {error && (
                    <label id="invalid-signup" className="invalid-feedback">
                        {error}
                    </label>
                )}
                <section>
                    <input
                        {...register("firstName", { onChange: handleChange })}
                        placeholder="First Name *"
                        className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signup"
                    />
                    <input
                        {...register("lastName", { onChange: handleChange })}
                        placeholder="Last Name *"
                        className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signup"
                    />
                    <input
                        {...register("email", { onChange: handleChange })}
                        type="email"
                        placeholder="Email *"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signup"
                    />
                    <input
                        {...register("password", { onChange: handleChange })}
                        type="password"
                        placeholder="Password *"
                        className={`form-control ${
                            errors.password ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signup invalid-password"
                    />
                    <input
                        {...register("retypePassword", {
                            onChange: handleChange,
                        })}
                        type="password"
                        placeholder="Retype Password *"
                        className={`form-control ${
                            errors.retypePassword ? "is-invalid" : ""
                        }`}
                        aria-labelledby="invalid-signup invalid-retype-password"
                    />
                    {errorMessageText && (
                        <label id="invalid-signup" className="invalid-feedback">
                            {errorMessageText}
                        </label>
                    )}
                    {errors.password ? (
                        <label
                            id="invalid-password"
                            className="invalid-feedback"
                        >
                            {errors.password?.message}
                        </label>
                    ) : (
                        ""
                    )}
                    {errors.retypePassword ? (
                        <label
                            id="invalid-retype-password"
                            className="invalid-feedback"
                        >
                            {errors.retypePassword?.message}
                        </label>
                    ) : (
                        ""
                    )}
                </section>
                <section className="signup-btn-container">
                    <button
                        className="signup-btn"
                        type="submit"
                        disabled={loading}
                    >
                        Sign Up
                    </button>
                    <Link to="/#" className="back-btn">
                        Back
                    </Link>
                </section>
                <section className="signin-link">
                    <p>
                        Already Have An Account? Then{" "}
                        <Link to="/signIn" className="sign-link">
                            Sign In
                        </Link>
                    </p>
                </section>
            </form>
        </div>
    );
};

export default SignUp;