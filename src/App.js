import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Components
import HomePage from "./Components/APOD/HomePage.js";
import NavigationBar from "./Components/NavigationBar.js";
import APOD from "./Components/APOD/APOD.js";
import GalaxyPage from "./Components/Galaxies/GalaxyPage.js";
import GalaxyApp from "./Components/GalaxyApp.js"; // Import GalaxyApp

// Function that starts the app
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/galaxy" element={<GalaxyPage />} />
        <Route path="/galaxy/add" element={<GalaxyApp />} />
      </Routes>
    </Router>
  );
}

export default App;
