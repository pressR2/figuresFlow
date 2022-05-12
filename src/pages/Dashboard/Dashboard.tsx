import { useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [error, setError] = useState<string>("");
    const authContext  = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        setError("");
        try {
            await authContext?.logOut();
            localStorage.removeItem(authContext?.currentUser?.email || ""); 
            navigate("/signIn");
        } catch {
            setError("Fail to log out");
        }
    }

    return (
        <div>
            <h2>Dashboard</h2>
            {error && alert(`${error}`)}
            <button className="sign-in_bt" type="button" onClick={handleLogOut}>
                Log out
            </button>
        </div>
    )
}

export default Dashboard;