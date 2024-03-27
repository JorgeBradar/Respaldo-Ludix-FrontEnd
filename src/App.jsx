
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Landing } from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Reviews } from './pages/Reviews';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { Aboutus } from './pages/Aboutus';
import { Createby } from './pages/Createby';
import { Contact } from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Games />} path="/games" />
          <Route element={<Reviews />} path="/Reviews" />
          <Route element={<Aboutus />} path="/aboutus" />
          <Route element={<Createby />} path="/createby" />
          <Route element={<Contact />} path="/contact" />

      </Routes>
    </BrowserRouter>
  )
}

export default App;