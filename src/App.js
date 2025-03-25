import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import JoinGuest from "./pages/JoinGuest";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Authentication initialMode="login" />} />
          <Route path="/register" element={<Authentication initialMode="register" />} />
          <Route path="/join" element={<JoinGuest />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;