import Routing from "./components/routes/Routing";
import AuthProvider from "./services/auth/AuthContext";

const App = () => {
  return (
    <AuthProvider email="" password="">
      <Routing />
    </AuthProvider>
  );
}

export default App;