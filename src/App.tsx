import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './modules/nav/Navbar ';
import { MainComponent } from './modules/principal/main';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainComponent />} />
        {/* Otras rutas como Tienda, Sobre CD, etc. */}
      </Routes>
    </Router>
  )
}

export default App;
