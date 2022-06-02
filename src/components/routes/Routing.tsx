import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../services/auth/AuthContext";
import Dashboard from "../../pages/Dashboard/Dashboard";
import SignIn from "../forms/auth/SignIn";
import SignUp from "../forms/auth/SignUp";
import ForgotPassword from "../forms/auth/ForgotPassword";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import Figures from "../../pages/Figures/Figures";
import Figures2 from "../../pages/Figures/Figures2";
import Figures3 from "../../pages/Figures/Figures3";

const Routing = () => {
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
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/figures" element={<Figures />} />
            <Route path="/figures2" element={<Figures2 />} />
            <Route path="/figures3" element={<Figures3 />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signIn" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
