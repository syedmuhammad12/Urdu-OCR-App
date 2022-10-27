import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HeaderHome from "../components/HeaderHome";
import Grid from "@mui/material/Grid";
import ImageTextCard from "../components/ImageTextCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;

function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        bgcolor: "#fff",
      }}
    >
      <Toolbar />
      {/* header */}
      <HeaderHome />

      {/* heading */}
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 9,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
              }}
            >
              <Divider />
              Amazing Features
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* features */}
      <Grid container spacing={2} sx={{ mt: 9, justifyContent: "center" }}>
        <Grid item xs={12} sm={6} md={3}>
          <ImageTextCard
            img="images/features/f1.jpg"
            height="170"
            width="80"
            text="Latest cutting-edge technologies used for model training"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImageTextCard
            img="images/urdupic-2.jpg"
            height="175"
            width="80"
            text="Model training on a large Urdu Corpus"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImageTextCard
            img="images/features/f3.jpg"
            height="175"
            width="80"
            text="Process multi-column, angled as well as border text documents "
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImageTextCard
            img="images/features/f4.jpg"
            height="199"
            width="80"
            text="Works with any type of image files"
          />
        </Grid>
      </Grid>

      {/* a product of */}

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 9,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
              }}
            >
              <Divider />A Product of
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* product pics */}
      <Grid
        container
        columnSpacing={10}
        sx={{ mt: 7, justifyContent: "center" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <img src="images/logo/NED.png" alt="NED" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src="images/logo/NCAI.png" alt="NCAI" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src="images/logo/NCL.png" alt="NCL" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src="images/logo/ATUP.png" alt="ATUP" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
