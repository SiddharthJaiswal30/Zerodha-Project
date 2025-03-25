import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  Avatar,
} from "@mui/material";

function LandingPage() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Apna Video Call Logo"
                src="/logo.png"
                sx={{ width: 40, height: 40, marginRight: 1 }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#fff" }}>
                Apna Video Call
              </Typography>
            </Link>
          </Box>
          <Box>
            <Button component={Link} to="/join" sx={{ color: "#fff", marginRight: 2 }}>
              Join as Guest
            </Button>
            <Button component={Link} to="/register" sx={{ color: "#fff", marginRight: 2 }}>
              Register
            </Button>
            <Button component={Link} to="/login" sx={{ color: "#fff" }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          height: "calc(100vh - 64px)", 
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Apna Video Call
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Connect with your loved ones. Cover the distance with Apna Video Call.
          </Typography>
          <Button component={Link} to="/register" variant="contained" color="warning" size="large">
            Get Started
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: { xs: "none", md: "block" }, textAlign: "center" }}>
          <img
            src=""
            alt="Video Call Illustration"
            style={{ width: "90%", borderRadius: 8 }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;