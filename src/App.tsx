import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={"/landing"} element={<LandingPage />} />
          {/* redirect if not match any path */}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
