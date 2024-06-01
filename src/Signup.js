import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Header from "./header";
function Signup() {
  const paperStyle = { padding: "10px 20px", width: 300, margin: "80px auto" };
  const headerStyle = { margin: 0 };
  const [lang, setLang] = useState();
  const navigate = useNavigate();
  const langInfo = ["English", "Hindi", "Telugu"];
  const marginTop = { marginTop: 10 };

  const [inpts, setInpts] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [error, setError] = useState({
    email: "",
    mobile: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpts);
    setError(Validation(inpts));
    var prsData = JSON.parse(localStorage.getItem("") || "[]");
    var stores = {
      name: inpts.name,
      email: inpts.email,
      mobile: inpts.mobile,
      password: inpts.password
    };
    prsData.push(stores);
    localStorage.setItem("prsData", JSON.stringify(prsData));
  };

  const handleChange = (e) => {
    setInpts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const email_pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const mobile_pattern = /^[0-9]{10,10}$/;
  const Validation = (inpts) => {
    const ValidationError = {};

    if (!inpts.name) {
      ValidationError.name = "please enter your name";
      alert(ValidationError.name);
    } else {
      if (!inpts.mobile) {
        ValidationError.mobile = "please enter mobile number";
        alert(ValidationError.mobile);
      } else if (!mobile_pattern.test(inpts.mobile)) {
        ValidationError.mobile = "mobilenumber must have 10 digits only";
        alert(ValidationError.mobile);
      } else {
        if (!inpts.email) {
          ValidationError.email = "please enter email";
          alert(ValidationError.email);
        } else if (!email_pattern.test(inpts.email)) {
          ValidationError.email = "please enter the correct format of Email";
          alert(ValidationError.email);
        } else {
          navigate("/login.js");
        }
      }
    }
    return ValidationError;
  };

  return (
    <div>
      <Header />

      <form>
        <Paper
          elevation={20}
          style={paperStyle}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Grid container spacing={2}>
            <Grid align="center" item xs={12} md={12}>
              <br />
              <br />
              <h2 style={headerStyle}> Sign Up</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                onChange={handleChange}
                name="name"
                value={inpts.name}
                required
                placeholder="Enter your name"
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
              <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                style={marginTop}
                label="Select language"
                value={lang}
                onChange={(e) => setLang(e.target.ariaValueNow)}
                select
                SelectProps={{ native: true }}
              >
                {langInfo.map((lang) => (
                  <option value={lang} key={lang}>
                    {lang}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Button
              style={marginTop}
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default Signup;
