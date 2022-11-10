import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import BoxContribution from "../components/BoxContribution";

import BoxPublication from "../components/BoxPublication";
import ImageTextCard from "../components/ImageTextCard";

const drawerWidth = 240;

function ContributionsPage() {
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
      {/* heading contributions */}

      <Grid container justifyContent="center">
        {/* heading */}
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 5,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
              }}
            >
              Our Contributions
              <Divider />
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* top paragraph */}
      {/* heading urdu... */}
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 2,
                textAlign: "start",
                fontWeight: "regular",
                fontSize: "h5.fontSize",
                color: "#008080",
              }}
            >
              URDU IMAGE CORPORA
            </Box>
          </Typography>
          <Typography>
            <Box
              sx={{
                mt: 2,
                textAlign: "start",
                fontWeight: "regular",
                fontSize: "p.fontSize",
              }}
            >
              We are creating an image corpus of Urdu ligatures, words, and
              sentences from online sources typed in multi-style.
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* boxes of contribution */}

      {/* data sources */}

      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1, justifyContent: "center", mt: 7, mb: 2 }}
      >
        <Grid container justifyContent="center" spacing={2}>
          {/* heading */}
          <Grid item xs={12}>
            <Typography>
              <Box
                sx={{
                  mt: 5,
                  mb: 7,

                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "h4.fontSize",
                  color: "#08b3e5",
                }}
              >
                <Divider />
                Data Sources
              </Box>
            </Typography>
          </Grid>
        </Grid>
        {/* box data sources */}
        <Grid
          container
          columnSpacing={{ xs: 4, sm: 5, md: 9 }}
          rowSpacing={{ xs: 5, sm: 5 }}
          sx={{ justifyContent: "center" }}
        >
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={6}
            md={3}
          >
            <BoxContribution text="BBC Urdu" />
          </Grid>

          <Grid
            item
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <BoxContribution text="Daily Pakistan" />
          </Grid>

          <Grid
            item
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <BoxContribution text="Urdupoint" />
          </Grid>
        </Grid>
        {/* box Text Style: */}
        {/* heading */}
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 5,
                mb: 7,

                textAlign: "center",
                fontWeight: "bold",
                fontSize: "h4.fontSize",
                color: "#08b3e5",
                py: 2,
              }}
            >
              <Divider />
              Text Style
            </Box>
          </Typography>
        </Grid>
        {/* boxes text style 3 boxes */}
        <Grid
          container
          columnSpacing={{ xs: 4, sm: 5, md: 9 }}
          rowSpacing={{ xs: 5, sm: 5 }}
          sx={{ justifyContent: "center", mb: 9 }}
        >
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <ImageTextCard img="images/fonts/nastaleeq.png" text="Nastaleeq" />
          </Grid>

          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <ImageTextCard
              img="images/fonts/decotype-naskh-regular.png"
              // height="160"
              // width="80"
              text="Deco Naqsh"
            />
          </Grid>

          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <ImageTextCard
              img="images/fonts/alqalam-taj-nastaleeq-regular.png"
              height="98"
              width="80"
              text="Alqalam Regular"
            />
          </Grid>
        </Grid>

        {/* boxes text style 2 remaining boxes */}
        <Grid
          container
          columnSpacing={{ xs: 4, sm: 5, md: 6 }}
          rowSpacing={{ xs: 3, sm: 3, md: 3 }}
          sx={{ justifyContent: "center", mt: 9 }}
        >
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <ImageTextCard img="images/fonts/diwani.png" text="Diwaani" />
          </Grid>

          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            xs={12}
            sm={12}
            md={3}
          >
            <ImageTextCard
              img="images/fonts/alqalam-tehreeri-regular.png"
              // width="80"
              text="Tehreeri"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* publications */}
      <BoxPublication />

      {/* <Grid
          container
          columnSpacing={{ xs: 4, sm: 5, md: 9 }}
          rowSpacing={{ xs: 5, sm: 5 }}
          sx={{ justifyContent: "center" }}
        >
          
          
          
         
        </Grid> */}
    </Box>
  );
}

export default ContributionsPage;
