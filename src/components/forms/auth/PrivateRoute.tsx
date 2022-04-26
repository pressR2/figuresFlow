import { useAuth } from "../../../services/auth/AuthContext";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Home from "../../../pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const authContext = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signIn"
          element={<SignIn email="" password="" rememberMe />}
        />
        <Route
          path="/signUp"
          element={
            <SignUp
              firstName=""
              lastName=""
              email=""
              password=""
              retypePassword=""
            />
          }
        />
        <Route path="/forgotPassword" element={<ForgotPassword email="" />} />
        {authContext?.currentUser !== null ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="*" element={<Navigate to="/signIn" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}