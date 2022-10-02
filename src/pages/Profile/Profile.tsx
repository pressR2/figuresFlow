import NavWrapper from "../../components/NavWrapper/NavWrapper";
import { useAuth } from "../../services/auth/AuthContext";
import "./Profile.css";

const Profile = () => {
    const authContext = useAuth();

    return (
        <NavWrapper>
            <section className="profile">
                <h2>Profile</h2>
                <p className="loggedin-user">
                    <strong>Email: </strong>
                    {authContext?.currentUser?.email}
                </p>
            </section>
        </NavWrapper>  
    );
};

export default Profile;
