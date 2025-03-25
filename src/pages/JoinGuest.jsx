import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Box, Button, Typography } from "@mui/material";

function JoinGuest() {
  const { addToUserHistory } = useAuth();

  const joinNow = async () => {
    try {
      alert("Joined as guest successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: "20vh" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Join as Guest
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        You can join the video call as a guest.
      </Typography>
      <Button variant="contained" size="large" onClick={joinNow}>
        Join Now
      </Button>
    </Box>
  );
}

export default JoinGuest;