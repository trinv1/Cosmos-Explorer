import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importing Components
import HomePage from './Components/HomePage';
import NavigationBar from './Components/NavigationBar.js';
import APOD from './Components/APOD.js';

//Function that starts app
function App() {
  return (
    <Router>
        <NavigationBar />
        <Routes>
          {/*Each route displaying different component when clicked*/}
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/Apod" element={<APOD />} />
        </Routes>
      </Router>
  );
}

export default App;
