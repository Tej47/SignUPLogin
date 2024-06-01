import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <>
      <AppBar>
        <Typography align="center" bg-color="primary">
          <h3>Welcome!</h3>
        </Typography>
      </AppBar>
    </>
  );
}
