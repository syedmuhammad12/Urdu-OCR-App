import React from "react";
import { Button, Grid, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
function HeaderHome() {
  return (
    // main row header
    <Grid container spacing={2}>
      {/* row 1 --> 2 cols */}
      <Grid container columnSpacing={3} justifyContent="center">
        {/* col 1 pics */}
        <Grid item xs={12} sm={12} md={5}>
          <img src="images/logo/headerpic_mob1.png" alt="headerpic1" />
          <img src="images/logo/headerpic_mob2.jpg" alt="headerpic_mob2" />
        </Grid>
        {/* col 2 button and heading */}
        <Grid item xs={12} sm={12} md={5}>
          <Typography>
            <Box
              sx={{
                mt: 6,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
              }}
            >
              Digitizing documents within a minute
            </Box>
            <Box
              sx={{
                mt: 5,
                textAlign: "center",
                fontWeight: "regular",
                fontSize: "h6.fontSize",
                color: "#008080",
              }}
            >
              Eliminate tedious typing by using our AI-enabled Urdu OCR platform
              for extracting text from scanned documents and images
            </Box>
          </Typography>
          <Box
            sx={{
              mt: 6,
              textAlign: "center",
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/OcrEngine"
              sx={{
                px: 9,
                py: 2,
                mt: 4,
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: 4,
                backgroundColor: "#008080",
                borderRadius: 5,
                "&:hover": {
                  backgroundColor: "#08b3e5",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeaderHome;
