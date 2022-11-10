import Link from "@mui/material/Link";
import ResponsiveDrawer from "../components/DrawerNav";
import Typography from "@mui/material/Typography";
import OcrTextArea from "../components/OcrTextArea";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const drawerWidth = 240;

export default function OcrEnginePage() {
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
      {/* card inside main box that contains all ocr stuff */}
      <Card
        sx={{
          maxWidth: "100%",
          px: 2,
          py: 2,
          my: 4,
          bgColor: "#f5f5f5",
          borderColor: "#f5f5f5",
          borderRadius: 8,
        }}
      >
        <CardContent>
          {/* Main Grid that holds text area and image upload stuff*/}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* Title goes here */}
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
              <Typography>
                <Box
                  sx={{
                    textAlign: "Start",
                    fontWeight: "regular",
                    fontSize: "h4.fontSize",
                    color: "#08b3e5",
                  }}
                >
                  Convert Image to text Using Urdu OCR
                </Box>
              </Typography>
            </Grid>
            {/* Tagline*/}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography>
                <Box
                  sx={{
                    textAlign: "start",
                    mb: 3,
                    color: "#808080",
                    fontSize: "h6.fontSize",
                  }}
                >
                  Urdu OCR allows you to convert image to text
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <OcrTextArea />
        </CardContent>
      </Card>
    </Box>
  );
}
