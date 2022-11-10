import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
// our pages (for mobile view)

const navItemsList = (
  <List>
    <ListItem button component={Link} to="/">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>
    <ListItem button component={Link} to="/OcrEngine">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="Urdu OCR" />
      </ListItemButton>
    </ListItem>
    <ListItem button component={Link} to="/aboutus">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="About us" />
      </ListItemButton>
    </ListItem>
    <ListItem button component={Link} to="/team">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="Team" />
      </ListItemButton>
    </ListItem>
    <ListItem button component={Link} to="/contributions">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="Contributions" />
      </ListItemButton>
    </ListItem>

    <ListItem button component={Link} to="/news">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="News" />
      </ListItemButton>
    </ListItem>
    <ListItem button component={Link} to="/contactus">
      <ListItemButton sx={{ textAlign: "center" }}>
        <ListItemText primary="Contact us" />
      </ListItemButton>
    </ListItem>
  </List>
);

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* website name or logo */}
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        URDU OCR
      </Typography>
      <Divider />
      {/* our pages here */}
      {navItemsList}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(to right, #1bd7bb, #08b3e5)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
            }}
          >
            {/* website name or logo */}
            URDU OCR
          </Typography>
          {/* our pages  desktop view*/}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/" sx={{ color: "#fff" }}>
              Home
            </Button>
            <Button component={Link} to="/OcrEngine" sx={{ color: "#fff" }}>
              Urdu OCR
            </Button>
            <Button component={Link} to="/aboutus" sx={{ color: "#fff" }}>
              About us
            </Button>
            <Button component={Link} to="/team" sx={{ color: "#fff" }}>
              Team
            </Button>
            <Button component={Link} to="/contributions" sx={{ color: "#fff" }}>
              Contributions
            </Button>

            <Button component={Link} to="/news" sx={{ color: "#fff" }}>
              News
            </Button>
            <Button component={Link} to="/contactus" sx={{ color: "#fff" }}>
              Contact us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "linear-gradient(to right, #1bd7bb, #08b3e5)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </header>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
