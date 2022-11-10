import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import ImageTextCard from "../components/ImageTextCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;

function TeamPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        justifyContent: "center",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />

      {/* Meet the team */}

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
              Meet the team
              <Divider />
            </Box>
          </Typography>
        </Grid>
      </Grid>

      {/* team members */}
      {/* Dr.majida and Dr.saad */}

      <Grid
        container
        columnSpacing={{ xs: 4, sm: 5, md: 6 }}
        rowSpacing={{ xs: 3, sm: 3, md: 3 }}
        sx={{ justifyContent: "center", pt: 5 }}
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
          <ImageTextCard
            img="images/team/Saad.jpg"
            height="202"
            width="80"
            text="Dr. Saad Ahmed Qazi "
            title="Principal Investigator, Neurocomputation Lab, NCAI"
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
            img="images/team/Majida.jpg"
            height="200"
            width="1"
            text="Dr. Majida Kazmi"
            title="Principal Investigator of the project"
          />
        </Grid>
      </Grid>

      {/* three members here RAs*/}
      <Grid
        container
        columnSpacing={{ xs: 4, sm: 5, md: 6 }}
        rowSpacing={{ xs: 5, sm: 5 }}
        sx={{ justifyContent: "center", pt: 5 }}
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
          <ImageTextCard
            img="images/team/Danish.jpg"
            height="215"
            width="20"
            text="Danish Inam"
            title="Research Assistant"
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
            img="images/team/Samreen.jpeg"
            height="210"
            width="80"
            text="Samreen Habib"
            title="Research Assistant"
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
            img="images/team/miss_fauzia.png"
            height="228"
            text="Miss Fauzia Yasir"
            title="Research Fellow"
          />
        </Grid>
      </Grid>

      {/* Our collaborators */}

      <Grid
        container
        sx={{ justifyContent: "center", pt: 8 }}
        columnSpacing={{ xs: 4, sm: 5, md: 6 }}
        rowSpacing={{ xs: 5, sm: 5 }}
      >
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
                Meet Our collaborators
                <Divider />
              </Box>
            </Typography>
          </Grid>
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
            img="images/team/wajid_jawad.jpeg"
            height="158"
            width="20"
            text="Wajid Jawad"
            title="President, Anjuman Taraqqi-e-Urdu Pakistan"
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
            img="images/team/syed abid rizvi.jpg"
            height="160"
            width="80"
            text="Syed Abid Rizvi"
            title="Treasurer, Anjuman Taraqqi-e-Urdu Pakistan"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TeamPage;
