import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Click on the links to get redirected to the Signup and Login page</h1>
      <u>
        <li>
          <Link to="/signup.js">SIGNUP</Link>
        </li>
        <li>
          <Link to="/login.js">LOGIN</Link>
        </li>
      </u>
    </>
  );
}
export default Home;
