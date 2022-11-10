import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import FormFooter from "../components/FormFooter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const drawerWidth = 240;

function ContactPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
          justifyContent: "center",
        },
      }}
    >
      <Toolbar />
      {/* heading contact*/}
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
              Get in Touch
              <Divider />
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* form comes here */}

      <Grid container rowSpacing={5} sx={{ mt: 3, justifyContent: "center" }}>
        <Grid
          item
          container
          display="flex"
          justifyContent="center"
          xs={12}
          sm={10}
          md={7}
        >
          <Card
            sx={{
              borderColor: "#f5f5f5",
              borderRadius: 8,

              width: "100%",
            }}
          >
            <CardContent>
              {/* heading */}
              <Grid container justifyContent="center">
                {/* heading */}
                <Grid item xs={10}>
                  <Typography>
                    <Box
                      sx={{
                        mt: 2,
                        mb: 3,
                        textAlign: "start",
                        fontWeight: "bold",
                        fontSize: "h5.fontSize",
                        color: "#808080",
                      }}
                    >
                      How can we help you?
                    </Box>
                  </Typography>
                </Grid>
              </Grid>

              <FormFooter />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactPage;
