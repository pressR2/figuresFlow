import { FunctionComponent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./SignForms.css";
import { SignUpProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
                "Confirm Password does not match"
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
    const navigate = useNavigate();
    let errorMessageText: string = "";

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

    if (Object.keys(errors).length > 1 && Object.keys(errors).length <= 5) {
        errorMessageText = "Please fill marked fields";
    } else if (Object.keys(errors).length === 1) {
        errorMessageText = "Please fill marked field";
    }

    let errorMessage = (
        <span className="invalid-feedback">{errorMessageText}</span>
    );

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Enter Your Details</h2>
                    {error && <span className="invalid-feedback">{error}</span>}
                    <input
                        {...register("firstName")}
                        placeholder="First Name *"
                        className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                        }`}
                    />
                    <input
                        {...register("lastName")}
                        placeholder="Last Name *"
                        className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                        }`}
                    />
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Email *"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                    />
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password *"
                        className={`form-control ${
                            errors.password ? "is-invalid" : ""
                        }`}
                    />
                    <input
                        {...register("retypePassword")}
                        type="password"
                        placeholder="Retype Password *"
                        className={`form-control ${
                            errors.retypePassword ? "is-invalid" : ""
                        }`}
                    />
                    {errorMessage}
                    {errors.password ? (
                        <span className="invalid-feedback">
                            {errors.password?.message}
                        </span>
                    ) : (
                        ""
                    )}
                    {errors.retypePassword ? (
                        <span className="invalid-feedback">
                            {errors.retypePassword?.message}
                        </span>
                    ) : (
                        ""
                    )}
                    <div className="buttons-container">
                        <button
                            className="sign-up_bt"
                            type="submit"
                            disabled={loading}
                        >
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
