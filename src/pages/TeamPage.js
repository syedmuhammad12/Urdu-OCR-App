import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

function TeamPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        bgcolor: "#f5f5f5",
      }}
    >
      <Toolbar />
      this is the team page
    </Box>
  );
}

export default TeamPage;
