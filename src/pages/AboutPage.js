import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;
function AboutPage() {
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

      {/* heading about us*/}
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 7,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
              }}
            >
              About us
            </Box>
            <Divider />
          </Typography>
        </Grid>
      </Grid>
      {/* row 1 */}
      <Grid
        container
        columnSpacing={3}
        sx={{ mt: 4, justifyContent: "center" }}
      >
        <Grid item xs={12} sm={12} md={5}>
          <img src="images/urdupic-2.jpg" alt="urdu pic" />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          {/* urdu language */}
          <Typography>
            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#008080",
              }}
            >
              Urdu Language
            </Box>
            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                fontWeight: "regular",
                fontSize: "body2.fontSize",
              }}
            >
              Urdu is a language with a rich history and tradition, spoken by
              the people of Pakistan, Afghanistan, and India. Urdu being a
              resource-deprived language lags behind in the digital age.
            </Box>
            <Divider />
          </Typography>
        </Grid>
      </Grid>
      {/* row 2 */}
      <Grid
        container
        columnSpacing={3}
        sx={{ mt: 4, justifyContent: "center" }}
      >
        <Grid item xs={12} sm={12} md={4}>
          {/* our goal */}

          <Typography>
            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#008080",
              }}
            >
              Our goal
            </Box>
            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                fontWeight: "regular",
                fontSize: "body2.fontSize",
              }}
            >
              Our goal is to facilitate our users to search and find Urdu
              documents and translate into other languages at just a click. We
              are on a mission of preserving Urdu literature using accurate and
              lightning-fast document recognizer.
            </Box>
          </Typography>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6}>
          <img
            src="images/urdu project.png"
            alt="urdu project pic"
            width="100%"
            height="100%"
          />
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default AboutPage;
