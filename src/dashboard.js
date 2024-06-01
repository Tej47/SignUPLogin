import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function D() {
  const lgin = JSON.parse(localStorage.getItem("prsData"));
  const name = lgin[0].name;
  const email = lgin[0].email;
  const mobile = lgin[0].mobile;
  const navigate = useNavigate();

  const handle = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <div>
      <Box margin={"auto"} marginY={20} align="center">
        <Card elevation={20} sx={{ width: { xs: 400, sm: 400, md: 500 } }}>
          <CardMedia />

          <CardContent gutterBottom>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              <Typography>
                <h3>Name:- {name}</h3>
              </Typography>
              <Typography>
                <h3>Email:- {email}</h3>
              </Typography>
              <Typography>
                <h3>Mobile:- {mobile}</h3>
              </Typography>
            </Typography>
            <button onClick={handle}>LOGOUT </button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
