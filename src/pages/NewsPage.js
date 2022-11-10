import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;

function NewsPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 4,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
              }}
            >
              News
              <Divider />
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* News pic */}
      <Grid container sx={{ mt: 7, justifyContent: "center" }}>
        <Grid item xs={9}>
          <Box>
            <img src="images/news_pic.jpg" alt="news pic" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewsPage;
