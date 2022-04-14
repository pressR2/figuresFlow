import SignIn from "./components/forms/auth/SignIn";
import SignUp from "./components/forms/auth/SignUp";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
