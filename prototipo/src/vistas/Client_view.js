import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import test from "../Images/CineTec.jpg"

function Client_view() {
  const navigate = useNavigate();

  //por si quiero llamar a alguna función desde un button
  const handleButtonClick = () => {
    console.log('SOY UN BOTÓN');    
  };


//en los select de las lineas 29 par abajo se debe de accesar a la DB y modificar las opciones!!!
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        <img src={test} 
              alt="CineTec" 
              class = "rounded mx-auto d-block"
              className="img-thumbnail" 
              style={{ border: 'none' }}/>
      <h1>Vista del Cliente</h1>
      <div class="input-group mb-1" style={{justifyContent: 'center'}}>
              <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelectSucursal">Cine:</label>
              </div>
                <select class="custom-select" id="inputGroupSelectSucursal">
                    <option selected>El chino 1</option>
                    <option value="1">El chino 2</option>
                    <option value="2">El chino 3</option>
                    <option value="3">El chino 4</option>
                </select>
                
            </div>
            <div class="input-group mb-2" style={{justifyContent: 'center'}}>
              <label class="input-group-text" for="inputGroupSelectSucursal">Película:</label>
                <select class="custom-select" id="inputGroupSelectSala">
                    <option selected>Película 1</option>
                    <option value="1">Película 2</option>
                    <option value="2">Película 3</option>
                    <option value="3">Película 4</option>
                </select>
            </div>
            <div class="input-group mb-2" style={{justifyContent: 'center'}}>
              <label class="input-group-text" for="inputGroupSelectSucursal">Proyección:</label>
                <select class="custom-select" id="inputGroupSelectSala">
                    <option selected>Proyección 1</option>
                    <option value="1">Proyección 2</option>
                    <option value="2">Proyección 3</option>
                    <option value="3">Proyección 4</option>
                </select>
            </div>
            <div class="input-group mb-2" style={{justifyContent: 'center'}}>
              <label class="input-group-text" for="inputGroupSelectSucursal">Asientos (Fila):</label>
                <select class="custom-select" id="inputGroupSelectSala">
                    <option selected>Fila 1</option>
                    <option value="1">Fila 2</option>
                    <option value="2">Fila 3</option>
                    <option value="3">Fila 4</option>
                </select>
            </div>
            <div class="input-group mb-2" style={{justifyContent: 'center'}}>
              <label class="input-group-text" for="inputGroupSelectSucursal">Asientos (Columna):</label>
                <select class="custom-select" id="inputGroupSelectSala">
                    <option selected>Columna 1</option>
                    <option value="1">Columna 2</option>
                    <option value="2">Columna 3</option>
                    <option value="3">Columna 4</option>
                </select>
            </div>

            <button className="btn btn-dark" onClick={handleButtonClick}>
                Comprar/Generar Factura
            </button>
        
    </div>
  );
}

export default Client_view;