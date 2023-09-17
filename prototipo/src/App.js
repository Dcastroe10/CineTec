
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Login_view from './vistas/Login';
import Admin_view from './vistas/Admin_view';
import Client_view from './vistas/Client_view';


//<Route path='/admin' element={<Admin_view />} />

function App() {
  return (
    <Router>
      <div className='container'>
       <Routes>
       <Route path='/CineTec_Prototipo' element={<Login_view />} />
       <Route path='/AdminView' element={<Admin_view />} />
       <Route path='/ClientView' element={<Client_view />} />
       </Routes>
      </div>
    </Router>
     

  
  );
}



export default App;
