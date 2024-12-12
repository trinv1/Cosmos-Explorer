import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importing Components
import HomePage from './Components/APOD/HomePage.js';
import NavigationBar from './Components/NavigationBar.js';
import APOD from './Components/APOD/HomePage.js';
import GalaxyPage from './Components/Galaxies/GalaxyPage.js';
import FavPage from './Components/Favourites/FavPage.js';
import Edit from './Components/EditGalaxy.js';

//Function that starts app
function App() {
  return (
    <Router>
        <NavigationBar />
        <Routes>
          {/*Each route displaying different component when clicked*/}
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="Galaxy" element={<GalaxyPage />} />
          <Route path="Favourites" element={<FavPage />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
  );
}

export default App;
