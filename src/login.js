import React, { useState } from "react";
import {
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  TextField,
  Button
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Login() {
  const paperStyle = { padding: "10px 20px", width: 300, margin: "80px auto" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 10 };
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const lgin = JSON.parse(localStorage.getItem("prsData"));
  const phone = lgin[0].mobile;
  const mail = lgin[0].email;
  const pass = lgin[0].password;

  const [inpts, setInpts] = useState({
    email: "",
    mobile: "",
    password: ""
  });
  const [error, setError] = useState({
    email: "",
    mobile: "",
    password: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpts);
    setError(Validation(inpts));
  };

  const handleChange = (e) => {
    setInpts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const email_pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const mobile_pattern = /^[0-9]{10,10}$/;
  const password_pattern = /^[a-zA-Z0-9]{6,6}$/;
  const Validation = (inpts) => {
    const ValidationError = {};

    if (!inpts.email) {
      ValidationError.email = "plese enter email! ";
      alert(ValidationError.email);
    } else if (!email_pattern.test(inpts.email)) {
      ValidationError.email = "please enter the correct format of Email!";
      alert(ValidationError.email);
    } else {
      if (!inpts.mobile) {
        ValidationError.mobile = "please enter mobile number! ";
        alert(ValidationError.mobile);
      } else if (!mobile_pattern.test(inpts.mobile)) {
        ValidationError.mobile = "number must have 10 digits only!";
        alert(ValidationError.mobile);
      } else {
        if (!inpts.password) {
          ValidationError.password = "plese enter the Password!";
          alert(ValidationError.password);
        } else if (!password_pattern.test(inpts.password)) {
          ValidationError.password = "password length must be 6 letters only!";
          alert(ValidationError.password);
        } else if (inpts.email === mail && inpts.mobile === phone) {
          alert("Login Successful");
          navigate("/dashboard.js");
        } else {
          alert("no data found");
        }
      }
    }
    return ValidationError;
  };

  return (
    <div>
      <AppBar>
        <Link to="/">Home</Link>
      </AppBar>

      <form>
        <Paper
          elevation={20}
          style={paperStyle}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            width: {
              xs: 300,
              sm: 300,
              md: 300,
              lg: 300,
              xl: 300
            },
            marginTop: {
              xs: 10,
              sm: 10,
              md: 15
            }
          }}
        >
          <Grid container spacing={2}>
            <Grid align="center" item xs={12} md={12}>
              <h2 style={headerStyle}>Log In</h2>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                onChange={handleChange}
                name="email"
                value={inpts.email}
                type={"email"}
                label="Email"
                required
                placeholder="Enter your email"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                onChange={handleChange}
                name="mobile"
                value={inpts.mobile}
                type={""}
                label="Mobile number"
                required
                placeholder="Enter your mobile number"
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                onChange={handleChange}
                value={inpts.password}
                name="password"
                placeholder="Password"
                style={headerStyle}
                fullWidth
                type={visible ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleVisibility}>
                        {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <Button
                align="center"
                style={marginTop}
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default Login;
