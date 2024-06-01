import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./login";
import Home from "./home";
import D from "./dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup.js" element={<Signup />} />
      <Route path="/login.js" element={<Login />} />
      <Route path="/dashboard.js" element={<D />} />
    </Routes>
  );
}
export default App;
