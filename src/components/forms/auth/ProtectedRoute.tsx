import { Navigate } from "react-router-dom";
import { useAuth } from "../../../services/auth/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { currentUser } = useAuth();

    if (currentUser) return <>{children}</>;

    return <Navigate to="/signIn" />;
};

export default ProtectedRoute;