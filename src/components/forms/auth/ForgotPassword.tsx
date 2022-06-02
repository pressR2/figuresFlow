import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./SignForms.css";
import { ForgotPasswordProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ForgotPassword: FunctionComponent<ForgotPasswordProps> = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordProps>({
        resolver: yupResolver(validationSchema),
    });

    const authContext = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const onSubmit: SubmitHandler<ForgotPasswordProps> = async (data) => {
        try {
            setMessage("");
            setError("");
            setLoading(true);
            await authContext?.resetPassword(data.email);
            setMessage("Check your inbox for further instructions");
        } catch {
            setError("Faild to reset password");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Password Reset</h2>
                    {error && (
                        <label htmlFor="email" className="invalid-feedback">
                            {error}
                        </label>
                    )}
                    {message && (
                        <label htmlFor="email" className="valid-feedback">
                            {message}
                        </label>
                    )}
                    <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="Email *"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                    />
                    {errors.email ? (
                        <label htmlFor="email" className="invalid-feedback">
                            Please fill marked field
                        </label>
                    ) : (
                        ""
                    )}
                    <div className="password-reset-btn-container">
                        <button
                            className="reset-btn"
                            type="submit"
                            disabled={loading}
                        >
                            Reset
                        </button>
                        <Link to="/signIn" className="back-btn">
                            Back
                        </Link>
                    </div>
                    <div className="create-account-link">
                        <p>Don't have an account?</p>
                        <Link to="/signUp" className="sign-link">
                            Click here to create one
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
