import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './modules/nav/Navbar ';
import { MainComponent } from './modules/principal/main';
import LoginForm from './modules/login/loginForm';
import {ProductsList} from './modules/products/productsList';

function App() {
  return (
    <Router basename="/MisZapatos">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/productos" element={<ProductsList />} />
        <Route path="*" element={<h1>Ruta no encontrada</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
