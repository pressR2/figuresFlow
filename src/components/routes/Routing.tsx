import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import SignIn from "../forms/auth/SignIn";
import SignUp from "../forms/auth/SignUp";
import ForgotPassword from "../forms/auth/ForgotPassword";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import Figures from "../../pages/Figures/Figures";
import Figures2 from "../../pages/Figures/Figures2";
import Figures3 from "../../pages/Figures/Figures3";
import DataTable from "../../pages/FiguresList/DataTable";
import ProtectedRoute from "../forms/auth/ProtectedRoute";

const Routing = () => {
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
                <Route
                    path="/forgotPassword"
                    element={<ForgotPassword email="" />}
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/figures"
                    element={
                        <ProtectedRoute>
                            <Figures />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/figures2"
                    element={
                        <ProtectedRoute>
                            <Figures2 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/figures3"
                    element={
                        <ProtectedRoute>
                            <Figures3 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/figuresList"
                    element={
                        <ProtectedRoute>
                            <DataTable />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
