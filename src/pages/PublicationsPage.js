import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const drawerWidth = 240;

function PublicationsPage() {
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

      {/* heading */}
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
              Publications
              <Divider />
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {/* row 1 has 2 cards */}

      <Grid
        container
        columnSpacing={10}
        rowSpacing={5}
        sx={{ mt: 7, justifyContent: "center" }}
      >
        {/* p1 */}
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{ borderColor: "#f5f5f5", borderRadius: 8, py: 2, px: 3 }}
          >
            <CardContent>
              <Typography variant="body1">
                M. Kazmi, F. Yasir, S. Habib, M. S. Hayat, and S. A. Qazi,
                “Photometric Ligature Extraction Technique for Urdu Optical
                Character Recognition”, Eng. Technol. Appl. Sci. Res., vol. 11,
                no. 6, pp. 7968–7973, Dec. 2021.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* p2 */}
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{ borderColor: "#f5f5f5", borderRadius: 8, py: 2, px: 3 }}
          >
            <CardContent>
              <Typography variant="body1">
                H. R. Khan, M. A. Hasan, M. Kazmi, N. Fayyaz, H. Khalid, and S.
                A. Qazi, “A Holistic Approach to Urdu Language Word Recognition
                using Deep Neural Networks”, Eng. Technol. Appl. Sci. Res., vol.
                11, no. 3, pp. 7140–7145, Jun. 2021.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PublicationsPage;
