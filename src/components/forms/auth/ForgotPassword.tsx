import { FunctionComponent, useState} from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./SignForms.css";
import { ForgotPasswordProps } from "../../../models";
import { useAuth } from "../../../services/auth/AuthContext";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ForgotPassword: FunctionComponent<ForgotPasswordProps> = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required()
    });

    const { register, handleSubmit, formState: {errors} } = useForm<ForgotPasswordProps>({
        resolver: yupResolver(validationSchema)
    });

    const authContext  = useAuth();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const onSubmit: SubmitHandler<ForgotPasswordProps> = async data => {

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
    }
 
    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Password Reset</h2>
                    {error && <span className="invalid-feedback">{error}</span>}
                    {message && <span className="valid-feedback">{message}</span>}
                    <input {...register("email")} type="email" placeholder="Email *" className={`form-control ${errors.email ? "is-invalid" : ""}`}></input>
                    {errors.email ? <span className="invalid-feedback">Please fill marked field</span> : ""}
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
