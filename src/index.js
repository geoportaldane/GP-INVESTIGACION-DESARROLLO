import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Header from './components/Essencials/header';
import Banner from './components/Essencials/Banner';
import Footer from './components/Essencials/footer';

import Home from './components/Home';
import Nosotros from './components/Nosotros';
import LineasEstrategicas from './components/LineasEstrategicas';
import GestionConocimiento from './components/GestionConocimiento';
import Investigacion from './components/Investigacion';
import Innovacion from './components/Innovación';
import OtrosProductos from './components/OtrosProductos';

const root = ReactDOM.createRoot(document.getElementById('section'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios/git-investigacion-desarrollo/nosotros' element={<Nosotros />} />
        <Route path='/servicios/git-investigacion-desarrollo/lineas-estrategicas' element={<LineasEstrategicas />} />
        <Route path='/servicios/git-investigacion-desarrollo/gestion-conocimiento' element={<GestionConocimiento />} />
        <Route path='/servicios/git-investigacion-desarrollo/investigacion' element={<Investigacion />} />
        <Route path='/servicios/git-investigacion-desarrollo/innovacion' element={<Innovacion />} />
        <Route path='/servicios/git-investigacion-desarrollo/otros-productos' element={<OtrosProductos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


