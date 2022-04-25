import { useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("");
    const authContext  = useAuth();
    const navigate = useNavigate();

    async function handleLogOut() {
        setError("");

        try {
            await authContext?.logOut();
            navigate("/signIn");
        } catch {
            setError("Fail to log out");
        }
    }

    return (
        <div>
            <h2>Dashboard</h2>
            {console.log(authContext?.currentUser?.email)}
            {error && alert(`${error}`)}
            <button className="sign-in_bt" type="button" onClick={handleLogOut}>
                Log out
            </button>
        </div>
    )
}