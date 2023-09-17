import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Client_view() {
    const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log('SOY UN BOTÓN');
    navigate('/CineTec_Prototipo');

  };

  return (
    <div>
      <h1>Vista de CLIENTE</h1>
      <button className="btn btn-dark" onClick={handleButtonClick}>
        Presiona para volver (botón hecho con bootstrap)
      </button>
    </div>
  );
}

export default Client_view;