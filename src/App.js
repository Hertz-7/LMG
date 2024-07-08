import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Artists from './pages/artists/artists';
import CasePage from './pages/casestudies/casestudies';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/casestudies" element={<CasePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
