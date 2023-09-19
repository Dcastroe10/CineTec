import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login_view from './vistas/Login';
import Admin_view from './vistas/Admin_view';
import Client_view from './vistas/Client_view';
import Register_view from './vistas/MovieRegister';
import Sucursal_view from './vistas/SucursalRegister';
import Sala_view from './vistas/SalaRegister';
import Proyection_view from './vistas/ProyectionRegister';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <span className="navbar-brand font-weight-bold">CineTec</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/ClientView">
                  Cliente
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/ClientView" element={<Client_view />} />
          <Route path="/CineTec_Prototipo" element={<Client_view />} />
          <Route path="/Login" element={<Login_view />} />
          <Route path="/AdminView" element={<Admin_view />} />
          <Route path="/MovieRegister" element={<Register_view />} />
          <Route path="/SucursalRegister" element={<Sucursal_view />} />
          <Route path="/SalaRegister" element={<Sala_view />} />
          <Route path="/ProyectionRegister" element={<Proyection_view />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
