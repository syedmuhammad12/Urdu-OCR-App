import React from "react";
import Grid from "@mui/material/Grid";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactBox from "../components/ContactBox";

function Footer() {
  return (
    <Grid
      container
      rowSpacing={5}
      sx={{
        mt: 9,
        justifyContent: "center",
        backgroundColor: "#1bd7bb",
        pb: 2,
      }}
    >
      {/* phone */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={6}
        md={3}
      >
        <ContactBox
          icon={
            <LocalPhoneIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                margin: "auto",
                fontWeight: "bold",
                fontSize: "50px",
                color: "#808080",
              }}
            />
          }
          title="Phone"
          contact="+92-21-99261261 (Ext.2407)"
        />
      </Grid>
      {/* location */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={6}
        md={3}
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
          <ContactBox
            icon={
              <LocationOnIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  margin: "auto",
                  fontWeight: "bold",
                  fontSize: "50px",
                  color: "#808080",
                }}
              />
            }
            title="Location"
            contact="Neurocomputation Lab, NCAI
            "
          />
        </Grid>
      </Grid>

      {/* Email */}
      <Grid
        item
        container
        display="flex"
        justifyContent="center"
        xs={12}
        sm={6}
        md={3}
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
          <ContactBox
            icon={
              <EmailIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  margin: "auto",
                  fontWeight: "bold",
                  fontSize: "50px",
                  color: "#808080",
                }}
              />
            }
            title="Email"
            contact="nclab@neduet.edu.pk
            "
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
