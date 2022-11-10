import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

function BoxPublication() {
  return (
    <Grid
      container
      columnSpacing={{ xs: 4, sm: 5, md: 9 }}
      rowSpacing={{ xs: 5, sm: 5, md: 9 }}
      sx={{ justifyContent: "center" }}
    >
      <Grid container justifyContent="center">
        {/* heading */}
        <Grid item xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 9,
                pt: 3,
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

      <Grid
        container
        columnSpacing={10}
        rowSpacing={1}
        sx={{ mt: 4, justifyContent: "center" }}
      >
        {/* p1 */}
        <Grid item xs={10}>
          <Card
            variant="outlined"
            sx={{
              borderColor: "#f5f5f5",
              borderRadius: 8,
              // py: 2,
              px: 3,
            }}
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
        <Grid item xs={10}>
          <Card
            variant="outlined"
            sx={{
              borderColor: "#f5f5f5",
              borderRadius: 8,
              // py: 2,
              px: 3,
            }}
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
    </Grid>
  );
}

export default BoxPublication;
