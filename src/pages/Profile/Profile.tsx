import NavWrapper from "../../components/NavWrapper/NavWrapper";
import { useAuth } from "../../services/auth/AuthContext";
import "./Profile.css";

const Profile = () => {
    const authContext = useAuth();

    return (
        <NavWrapper>
            <div className="profile">
                <h2>Profile</h2>
                <p className="loggedin-user">
                    <span>Email: </span>
                    {authContext?.currentUser?.email}
                </p>
            </div>
        </NavWrapper>  
    );
};

export default Profile;
