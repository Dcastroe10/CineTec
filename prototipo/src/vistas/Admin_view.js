import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Admin_view() {
  const navigate = useNavigate();

  //por si quiero llamar a alguna función desde un button
  const handleButtonClick = () => {
    console.log('SOY UN BOTÓN');
   
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
      <h1>Vista de Administrador</h1>
      

      <div style={{ marginTop: '20px' }}>
        <button
          className="btn btn-warning" // color naranja
          onClick={() => {
          
            navigate('/MovieRegister');
            console.log('Primer botón presionado');
          }}
        >
          Registro Películas
        </button>
        <button
          className="btn btn-warning" a
          onClick={() => {
          
            console.log('Segundo botón presionado');
          }}
          style={{ marginLeft: '10px' }}
        >
          Registro Sucursales
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          className="btn btn-warning" 
          onClick={() => {
          
            console.log('Primer botón presionado');
          }}
        >
          Registro Salas
        </button>
        <button
          className="btn btn-warning" 
          onClick={() => {
            
            console.log('Segundo botón presionado');
          }}
          style={{ marginLeft: '10px' }}
        >
          Asignar Proyecciones
        </button>
      </div>



    </div>
  );
}

export default Admin_view;
