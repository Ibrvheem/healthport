import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Patients from "./components/pages/Patients";
import Hostipals from "./components/pages/Hostipals";
import Footer from "./components/Footer";
import Oaas from "./components/pages/Oaas";
import Contact from "./components/pages/Contact";
import Oxiflow from "./components/pages/Oxiflow";

const theme = createTheme({
  palette: {
    primary: {
      main: "#49b0b6",
      light: "#899fa7",
      dark: "#36717d",
    },
    secondary: {
      main: "#7e366f",
      light: "#946494",
    },
  },
  typography: {
    fontFamily: "freight-text-pro-regular",
    h3: {
      fontSize: "4rem",
      color: "#002334",
      margin: "2rem 0rem",
      "@media (max-width:959.95px)": {
        fontSize: "3rem",
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/patients" element={<Patients />} />
          <Route exact path="/hospitals" element={<Hostipals />} />
          <Route exact path="/oxygen" element={<Oaas />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/oxiflow" element={<Oxiflow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
