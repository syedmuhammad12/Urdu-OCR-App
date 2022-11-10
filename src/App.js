import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import OcrEnginePage from "./pages/OcrEnginePage";
import DrawerAppBar from "./components/TopNavbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ContributionsPage from "./pages/ContributionsPage";
import NewsPage from "./pages/NewsPage";
import TeamPage from "./pages/TeamPage";
import Box from "@mui/material/Box";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* main app container */}
        <Box
          sx={{
            display: "flex",
            px: 3,
          }}
        >
          {/* top navbar */}
          <DrawerAppBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/OcrEngine" element={<OcrEnginePage />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contributions" element={<ContributionsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contactus" element={<ContactPage />} />
          </Routes>
        </Box>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
