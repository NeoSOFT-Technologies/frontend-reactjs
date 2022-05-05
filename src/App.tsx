import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";
import AuthGuard from "./components/auth-guard/AuthGuard";
import Error401 from "./pages/error-pages/Error401";
import { useAppSelector } from "./store/hooks";
import { LoginPageState } from "./types/redux";
import { RootState } from "./store";
import Registration from "./pages/registration/Registration";
function App() {
  const loginState: LoginPageState = useAppSelector(
    (state: RootState) => state.login
  );
  const [isAutheticated, setIsAuthenticated] = useState(false);
  const authGuard = new AuthGuard(<Error401 />);
  useEffect(() => {
    if (!loginState.loading && loginState.data && !loginState.error) {
      setIsAuthenticated(true);
    } else if (!loginState.loading && !loginState.data && loginState.error) {
      setIsAuthenticated(false);
    }
  }, [loginState]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path={"/landing"}
            element={authGuard.protect(<LandingPage />, isAutheticated)}
          />
          {/* redirect if not match any path */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
