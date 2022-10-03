import { Navigate } from "react-router-dom";
import { useAuth } from "../../../services/auth/AuthContext";
import { ProtectedRouteProps } from "../../../models";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { currentUser } = useAuth();

    if (currentUser) return <>{children}</>;

    return <Navigate to="/signIn" />;
};

export default ProtectedRoute;