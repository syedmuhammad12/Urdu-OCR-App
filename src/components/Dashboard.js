import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./navpageslist";
import AppBarChat from "./BarChart";
import AppPieChart from "./PieChart";
import ResponsiveDrawer from "./DrawerNav";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    // main box of the whole page
    <Box sx={{ display: "flex" }}>
      {/* drawer with appbar */}
      <ResponsiveDrawer navTitle="Dashboard"></ResponsiveDrawer>
      {/* content of the page box*/}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* Main Grid that holds chart and stuff*/}
        <Grid
          container
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {/* Title goes here */}
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                mt: 9,
                height: 340,
                width: 600,
              }}
            >
              <AppBarChat />
            </Paper>
          </Grid>
          {/* Tagline*/}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* Recent Deposits */}

            <Paper
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                height: 340,
                width: 500,
              }}
            >
              {/* <Deposits /> */}
              <AppPieChart />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
