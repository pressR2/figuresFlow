import PrivateRoute from "./components/forms/auth/PrivateRoute";
import AuthProvider from "./services/auth/AuthContext";

function App() {
  return (
    <AuthProvider email="" password="">
      <PrivateRoute />
    </AuthProvider>
  );
}

export default App;