import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import test from "../Images/CineTec.jpg"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Verificación del usuario y contraseña del admin
  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      console.log('FELICIDADES HACKEO EL SISTEMA');
      navigate('/AdminView');
    } else {
      console.log('Credenciales incorrectas');
      // navigate('/ClientView');
    }
  };

  const handleButtonClick = () => {
    console.log('SOY UN BOTÓN');
    navigate('/ClientView');
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    > 
    <img src={test} 
              alt="CineTec" 
              class = "rounded mx-auto d-block"
              className="img-thumbnail" 
              style={{ border: 'none' }}/>
   
     
     

      <h1>Login VIEW!!!! Usuario y contraseña son "admin"</h1>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-dark" onClick={handleSubmit}>
        Iniciar Sesión
      </button>
    </div>
  );
}

export default Login;
