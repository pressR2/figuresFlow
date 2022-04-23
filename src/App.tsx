import SignIn from "./components/forms/auth/SignIn";
import SignUp from "./components/forms/auth/SignUp";
import ForgotPassword from "./components/forms/auth/ForgotPassword";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./services/auth/AuthContext";

function App() {
    return (
        <AuthProvider
            email=""
            password=""
        >
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
                        element={
                            <ForgotPassword
                                email=""
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
